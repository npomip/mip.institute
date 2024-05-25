import StudyFields from '@/components/general/StudyFields'
import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import ProgramSorting from '../general/ProgramSorting'

type ProgramsFiltersType = {
  ofType?: 'profession' | 'course' | null
  close?: any
}

const ProgramsFilters = ({ ofType = null, close }: ProgramsFiltersType) => {
  return (
    <div className={stls.container}>
      <ProgramSorting />
      <StudyFields aside ofType={ofType} close={close} />
    </div>
  )
}

export default ProgramsFilters
