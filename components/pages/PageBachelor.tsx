// import { NextSeo } from 'next-seo'
// import { useContext } from 'react'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm
} from '@/components/sections'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import ProgramsFilters from '../layout/ProgramsFilters'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PageBachelor = ({programs=[]}) => {
  const categories = getUniqueCategories(programs)

  return (
    <>
      <FilterProvider items={programs}>
      <ProgramsFilters
          allPrograms={programs}
            studyFields={ categories}
          />
      </FilterProvider>
    </>
  )
}

export default PageBachelor