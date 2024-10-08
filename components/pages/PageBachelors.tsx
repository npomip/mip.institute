import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageBachelors.module.sass'
import BachelorSlugCard from '../cards/BachelorSlugCard'
import { getUniqueCategories } from '@/helpers/funcs/getUniqueCategories'
import Breadcrumbs from '@/ui/Breadcrumbs'
import ProgramsFilters from '../layout/ProgramsFilters'
import Wrapper from '../layout/Wrapper'
import { SeoPageBachelors } from '../seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

const PageBachelors = ({
  programs = [],
  bachelors = [],
  practicalTrainings = []
}) => {
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
      <SeoPageBachelors />
      <FilterProvider items={programs}>
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        <h1 className={stls.title}>Высшее образование</h1>
        <ProgramsFilters
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
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
