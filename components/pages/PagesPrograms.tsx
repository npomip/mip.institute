// import { NextSeo } from 'next-seo'
// import { useContext } from 'react'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
// import ProgramsContext from '@/context/programs/programsContext'
import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PagesPrograms = ({ ofType }: PagesProgramsType) => {
  // const { curProgramsStudyFieldSlug, studyFields } = useContext(ProgramsContext)

  return (
    <>
      <HeroPrograms ofType={ofType} />
      <FilterSearch />
      <Programs ofType={ofType} withQty threerow withFilters />
      <ContactForm />
    </>
  )
}

export default PagesPrograms
