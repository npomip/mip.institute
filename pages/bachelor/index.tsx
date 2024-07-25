import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { TypePageProgramsProps, TypePageProgramsPropsQuery, TypeGeneralGetStaticPropsContext } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'
import { revalidate, routes } from '@/config/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PageBachelors, PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { useRouter } from 'next/router'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsFilters from '@/components/layout/ProgramsFilters'
import { getUniqueCategories } from '@/components/funcs/getUniqueCategories'

const ProgramsPage = ({ bachelors, programs }) => {
console.log(bachelors, programs);

  // const router = useRouter()

  // const { query, asPath } = router
  // const {ofType} = query
  // const currentFieldSlug = studyFields.find(el => el.studyFieldSlug === query.studyFieldSlug)

  // const label = ofType === 'professions' ? 'Профессиональная переподготовка' : ofType === 'courses' ? 'Повышение квалификации' : 'Все курсы'

  // const segments = [`/${query.ofType}`, asPath]

  // const labels = [label, currentFieldSlug.studyField]
  // const slug = ['live-courses']

  // const breadcrumbs = segments.map((segment, index) => {
  //   const breadcrumb = {
  //     label: labels[index],
  //     path: segments[index],
  //     slug: slug[index]
  //   }
  //   return breadcrumb
  // })


  return (
    <>
    <PageBachelors programs={programs} bachelors={bachelors} />
      {/* <SeoPagesPrograms programs={programs} />
      <FilterProvider items={programs}>
        <PagesPrograms programs={programs} studyFields={studyFields} allPrograms={allPrograms} breadcrumbs={breadcrumbs} />
      </FilterProvider> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.bachelors })

export default ProgramsPage