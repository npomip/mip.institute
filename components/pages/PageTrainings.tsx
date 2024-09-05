import { FilterProvider } from '@/context/FilterContext/FilterContext'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import ProgramsFilters from '../layout/ProgramsFilters'
import Wrapper from '../layout/Wrapper'
import stls from '@/styles/pages/PageTrainings.module.sass'
import Breadcrumbs from '../general/Breadcrumbs'
import { SeoPageBachelors } from '../seo'
import PracticalSlugCard from '../cards/PracticalSlugCard'
import routes from '@/config/routes'
import { GetStaticProps } from 'next'
import { handleGetStaticProps } from '@/lib/index'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PageTrainings = ({ programs = [], practicalTrainings = [], bachelors= [] }) => {
  const categories = getUniqueCategories(programs)

  const label = 'Практические навыки'

  const segments = [`/practicalTraining`]

  const labels = [label]
  const slug = ['practicalTraining']

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
      <h1 className={stls.title}>Практические навыки</h1>
        <ProgramsFilters
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          allPrograms={programs}
          studyFields={[]}
        />
        <div className={stls.cards}>
          {practicalTrainings.map(practicalTraining => (
            <PracticalSlugCard key={practicalTraining?.slug} card={practicalTraining} />
          ))}
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export default PageTrainings
