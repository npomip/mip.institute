import { TypeLibPrograms, TypeLibProgram } from '@/types/index'

type TypePageProgramProps = {
  readonly programs: TypeLibPrograms | null
  readonly program: TypeLibProgram | null
  readonly studyFieldSlug: string | null
}

export default TypePageProgramProps
