import { TypeLibPrograms, TypeLibReviews } from '@/types/index'

type TypePageHomePropsQuery = {
  readonly programs: TypeLibPrograms | null
  readonly reviews: TypeLibReviews | null
}

export default TypePageHomePropsQuery
