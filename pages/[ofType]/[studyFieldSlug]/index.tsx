import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { TypePageProgramsProps, TypePageProgramsPropsQuery, TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { useRouter } from 'next/router'

const ProgramsPage: NextPage<TypePageProgramsProps & {studyFields: any} & {allPrograms: any[]}> = ({ programs, studyFields, allPrograms }) => {
  useHandleContextStaticProps({ programs })

  const router = useRouter()

  const { query, asPath } = router
  const {ofType} = query
  const currentFieldSlug = studyFields.find(el => el.studyFieldSlug === query.studyFieldSlug)

  const label = ofType === 'professions' ? 'Профессиональная переподготовка' : ofType === 'courses' ? 'Повышение квалификации' : 'Все курсы'

  const segments = [`/${query.ofType}`, asPath]

  const labels = [label, currentFieldSlug.studyField]
  const slug = ['live-courses']

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <>
      <SeoPagesPrograms programs={programs} />
      <FilterProvider items={programs}>
        <PagesPrograms programs={programs} studyFields={studyFields} allPrograms={allPrograms} breadcrumbs={breadcrumbs} />
      </FilterProvider>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { ofType, studyFieldSlug } = params || {}

  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms {
        programs {
          id
          title
          slug
          studyField
          studyFieldSlug
          type
          typeLabel
          studyMounthsDuration
          studyHours
          price
          isPopular
          courseOpened
          heroPicture {
            url
            width
            height
          }
          index_number {
            idx
          }
        }
      }
    `
  })

  const programs = res.data.programs

  // Фильтрация программ на основе параметров ofType и studyFieldSlug
  let filteredPrograms = programs.filter(program => program.studyFieldSlug === studyFieldSlug)
  if (ofType === 'professions') {
    filteredPrograms = filteredPrograms.filter(program => program.type === 'Profession')
  } else if (ofType === 'courses') {
    filteredPrograms = filteredPrograms.filter(program => program.type === 'Course')
  }

  const studyFieldMap = {}
  if(ofType === 'courses'){
    programs.filter(program => program.type === 'Course').forEach(program => {
      if (!studyFieldMap[program.studyFieldSlug]) {
        studyFieldMap[program.studyFieldSlug] = {
          studyField: program.studyField,
          studyFieldSlug: program.studyFieldSlug
        }
      }
    })
  } else {
    programs.forEach(program => {
      if (!studyFieldMap[program.studyFieldSlug]) {
        studyFieldMap[program.studyFieldSlug] = {
          studyField: program.studyField,
          studyFieldSlug: program.studyFieldSlug
        }
      }
    })
  }
  

  const studyFields = Object.values(studyFieldMap)


  return {
    props: {
      allPrograms: programs,
      programs: filteredPrograms,
      studyFields,
      ofType
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPathsPagePrograms {
        programs {
          studyFieldSlug
          type
          studyField
        }
      }
    `
  })

  const paths = res.data.programs.map(program => ({
    params: {
      ofType: program.type.toLowerCase(),
      studyFieldSlug: program.studyFieldSlug,
    }
  }))
  
  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProgramsPage
