import { TypeLibGeneralPicture } from '@/types/index'

type TypeLibTeacher = {
  id: string | null
  name: string | null
  achievements: string | null
  portrait: TypeLibGeneralPicture | null
} | null

export default TypeLibTeacher
