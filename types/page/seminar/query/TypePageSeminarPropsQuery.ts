import { TypeLibSeminars } from '@/types/index'

type TypePageSeminarPropsQuery = {
  readonly event : | {
    studyFieldSlug: string | null
    slug: string | null
  }
| null
}

export default TypePageSeminarPropsQuery