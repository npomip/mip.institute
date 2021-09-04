import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import StudyFields from '@/components/general/StudyFields'
import ProgramType from '@/components/general/ProgramType'

type ProgramsFiltersType = {
  ofType?: 'profession' | 'course' | null
}

const ProgramsFilters = ({ ofType = null }: ProgramsFiltersType) => {
  return (
    <div className={stls.container}>
      <StudyFields aside ofType={ofType} />
      <div className={stls.divider}></div>
      <ProgramType />
    </div>
  )
}

export default ProgramsFilters
