import { GetStaticProps, NextPage, GetStaticPaths } from 'next'
import { TypePageProgramsProps, TypePageProgramsPropsQuery, TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { FilterProvider } from '@/context/FilterContext/FilterContext'

const ProgramsPage: NextPage<TypePageProgramsProps & {studyFields: string[]}> = ({ programs, studyFields }) => {
  useHandleContextStaticProps({ programs })
  return (
    <>
      <SeoPagesPrograms programs={programs} />
      <FilterProvider items={programs}>
        <PagesPrograms programs={programs} studyFields={studyFields} />
      </FilterProvider>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const { ofType } = params

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

  // Фильтрация программ на основе параметра ofType
  let filteredPrograms = programs
  if (ofType === 'professions') {
    filteredPrograms = programs.filter(program => program.type === 'Profession')
  } else if (ofType === 'courses') {
    filteredPrograms = programs.filter(program => program.type === 'Course')
  } else if (ofType === 'programs') {
    filteredPrograms = programs
  } 

  const studyFieldMap = {}
  programs.forEach(program => {
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
      programs: filteredPrograms,
      studyFields
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { ofType: 'professions' } },
      { params: { ofType: 'courses' } },
      { params: { ofType: 'programs' } }
    ],
    fallback: 'blocking'
  }
}

export default ProgramsPage
