import { TypeLibPrograms, TypeLibProgram, TypeLibReviews } from '@/types/index'
import TypeLibBachelors from '@/types/lib/bachelors/TypeLibBachelors'
import TypeLibPracticalTrainings from '@/types/lib/practicalTrainings/TypeLibPracticalTrainings'

type TypePageProgramProps = {
  readonly reviews: TypeLibReviews | null
  readonly programs: TypeLibPrograms | null
  readonly program: TypeLibProgram | null
  readonly studyFieldSlug: string | null
  readonly bachelors: TypeLibBachelors | null
  readonly practicalTrainings: TypeLibPracticalTrainings | null

}

export default TypePageProgramProps
