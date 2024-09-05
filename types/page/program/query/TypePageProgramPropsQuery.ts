import { TypeLibPrograms, TypeLibReviews } from '@/types/index'
import TypeLibBachelors from '@/types/lib/bachelors/TypeLibBachelors'
import TypeLibPracticalTrainings from '@/types/lib/practicalTrainings/TypeLibPracticalTrainings'

type TypePageProgramPropsQuery = {
  readonly reviews: TypeLibReviews | null
  readonly programs: TypeLibPrograms | null
  readonly program: TypeLibPrograms | null
  readonly bachelors: any | null
  readonly practicalTrainings: any | null
}

export default TypePageProgramPropsQuery
