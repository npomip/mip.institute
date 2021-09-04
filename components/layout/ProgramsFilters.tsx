import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import StudyFields from '@/components/general/StudyFields'
import ProgramType from '@/components/general/ProgramType'

type ProgramsFiltersType = {
  ofType?: 'profession' | 'course' | null
}

const ProgramsFilters = ({ ofType = null }: ProgramsFiltersType) => {
  const { studyFields } = useContext(ProgramsContext)

  return (
    <div className={stls.container}>
      <StudyFields aside ofType={ofType} />
      <div className={stls.divider}></div>
      <ProgramType />
      {/* <div className={stls.divider}></div> */}
    </div>
  )
}

export default ProgramsFilters
