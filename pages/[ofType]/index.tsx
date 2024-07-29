import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { TypePageProgramsProps, TypePageProgramsPropsQuery, TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { useRouter } from 'next/router'

const ProgramsPage: NextPage<TypePageProgramsProps & {studyFields: string[]} & {allPrograms: any[]}> = ({ programs, studyFields, allPrograms, bachelors }) => {
  useHandleContextStaticProps({ programs })
  const router = useRouter()

  const { query, asPath } = router
  const {ofType} = query
  const label = ofType === 'professions' ? 'Профессиональная переподготовка' : ofType === 'courses' ? 'Повышение квалификации' : 'Все курсы'

  const segments = [`/${query.ofType}`]

  const labels = [label]
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
        <PagesPrograms bachelors={bachelors} programs={programs} studyFields={studyFields} allPrograms={allPrograms} breadcrumbs={breadcrumbs} />
      </FilterProvider>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { ofType } = params

  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms {
        bachelors {
        title
      }
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
  const bachelors = res.data.bachelors

  // Фильтрация программ на основе параметра ofType
  let filteredPrograms = programs
  if (ofType === 'professions') {
    filteredPrograms = programs.filter(program => program.type === 'Profession')
  } else if (ofType === 'courses') {
    filteredPrograms = programs.filter(program => program.type === 'Course')
  } else if (ofType === 'practice') {
    filteredPrograms = programs.filter(program => program.type === 'Practice')
  } else if (ofType === 'programs') {
    filteredPrograms = programs
  } 

  const studyFieldMap = {}
  filteredPrograms.forEach(program => {
    if (!studyFieldMap[program.studyFieldSlug]) {
      studyFieldMap[program.studyFieldSlug] = {
        studyField: program.studyField,
        studyFieldSlug: program.studyFieldSlug
      }
    }
  })

  const studyFields = Object.values(studyFieldMap)
  
  return {
    props: {
      allPrograms: programs,
      programs: filteredPrograms,
      studyFields,
      ofType,
      bachelors
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { ofType: 'professions' } },
      { params: { ofType: 'courses' } },
      { params: { ofType: 'programs' } },
      { params: { ofType: 'practice' } }
    ],
    fallback: 'blocking'
  }
}

export default ProgramsPage
