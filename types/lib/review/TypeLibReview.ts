import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibReview = {
  id: string | null
  name: string | null
  profession: string | null
  title: string | null
  story: string | null
  picture: TypeLibGeneralPicture | null
} | null

export default TypeLibReview
