import { FilterProvider } from '@/context/FilterContext/FilterContext'
import stls from '@/styles/pages/PageTrainings.module.sass'
import PracticalSlugCard from '../cards/PracticalSlugCard'
import Breadcrumbs from '@/ui/Breadcrumbs'
import ProgramsFilters from '@/components/program/ProgramsFilters'
import Wrapper from '@/ui/Wrapper'
import { SeoPageBachelors } from '../seo'
import useBreadcrumbs from '@/hooks/general/useBreadcrumbs'

const PageTrainings = ({
  programs = [],
  practicalTrainings = [],
  bachelors = []
}) => {
  const segments = ['practical-training']
  const labels = ['Краткосрочная ступенчатая программа']
  const slugs = ['practical-training']

  const breadcrumbs = useBreadcrumbs(segments, labels, slugs)
  return (
    <Wrapper>
      <SeoPageBachelors />
      <FilterProvider items={programs}>
        <Breadcrumbs isJournal breadcrumbs={breadcrumbs} />
        <h1 className={stls.title}>Практическая подготовка</h1>
        <ProgramsFilters
          bachelors={bachelors}
          practicalTrainings={practicalTrainings}
          allPrograms={programs}
          studyFields={[]}
        />
        <div className={stls.cards}>
          {practicalTrainings.map(practicalTraining => (
            <PracticalSlugCard
              key={practicalTraining?.slug}
              card={practicalTraining}
            />
          ))}
        </div>
      </FilterProvider>
    </Wrapper>
  )
}

export default PageTrainings
