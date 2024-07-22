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
import BachelorSlugCard from '../cards/BachelorSlugCard'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import ProgramsFilters from '../layout/ProgramsFilters'
import Wrapper from '../layout/Wrapper'
import stls from '@/styles/pages/PageBachelors.module.sass'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PageBachelors = ({ programs = [], bachelors = [] }) => {
  const categories = getUniqueCategories(programs)
  

  return (
    <Wrapper>
      <FilterProvider items={programs}>
      <h1 className={stls.title}>Высшее образование</h1>
        <ProgramsFilters
          bachelors={bachelors}
          allPrograms={programs}
          studyFields={[]}
        />
        <div className={stls.cards}>

        {bachelors.map(bachelor => (
          <BachelorSlugCard key={bachelor?.slug} card={bachelor} />
        ))}
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export default PageBachelors
