import { TypeLibPrograms } from '@/types/index'
import TypeLibBachelors from '@/types/lib/bachelors/TypeLibBachelors'
import TypeLibPracticalTrainings from '@/types/lib/practicalTrainings/TypeLibPracticalTrainings'

type TypePageProgramsPropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly bachelors: any | null
  readonly practicalTrainings: any | null
}

export default TypePageProgramsPropsQuery
