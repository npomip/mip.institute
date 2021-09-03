import stls from '@/styles/components/programs/ProgramsFilters.module.sass'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import StudyFields from '@/components/general/StudyFields'

type ProgramsFiltersType = {}

const ProgramsFilters = () => {
  const { studyFields } = useContext(ProgramsContext)

  console.log(studyFields)

  return (
    <div>
      <StudyFields />
    </div>
  )
}

export default ProgramsFilters
