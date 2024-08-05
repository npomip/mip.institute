// import { NextSeo } from 'next-seo'
// import { useContext } from 'react'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import BachelorSlugCard from '../cards/BachelorSlugCard'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import ProgramsFilters from '../layout/ProgramsFilters'
import Wrapper from '../layout/Wrapper'
import stls from '@/styles/pages/PageBachelors.module.sass'
import Breadcrumbs from '../general/Breadcrumbs'
import { NextSeo } from 'next-seo'
import { SeoPageBachelors } from '../seo'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PageBachelors = ({ programs = [], bachelors = [] }) => {
  const categories = getUniqueCategories(programs)

  const label = 'Высшее образование'

  const segments = [`/bachelor`]

  const labels = [label]
  const slug = ['bachelor']

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })
  

  return (
    <Wrapper>
      <SeoPageBachelors/>
      <FilterProvider items={programs}>
      <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
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
