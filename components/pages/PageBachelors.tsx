import ProgramsFilters from '@/components/program/ProgramsFilters'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageBachelors.module.sass'
import Breadcrumbs from '@/ui/Breadcrumbs'
import Wrapper from '@/ui/Wrapper'
import BachelorSlugCard from '../cards/BachelorSlugCard'
import { SeoPageBachelors } from '../seo'
import useBreadcrumbs from '@/hooks/general/useBreadcrumbs'

const PageBachelors = ({
  programs = [],
  bachelors = [],
  practicalTrainings = []
}) => {
  const label = 'Высшее образование'
  const segments = [`bachelor`]
  const labels = [label]
  const slug = ['bachelor']

  const breadcrumbs = useBreadcrumbs(segments, labels, slug)
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
