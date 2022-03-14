import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibWebinar = {
  id: string | null
  title: string | null
  name: string | null
  date: Date | null
  picture: TypeLibGeneralPicture | null
} | null

export default TypeLibWebinar
