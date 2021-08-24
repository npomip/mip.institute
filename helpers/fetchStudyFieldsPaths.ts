import { backRootUrl, programsUrl } from '@/config/index'
import { filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  ofType: 'course' | 'profession'
}

const fetchProgramsPaths = async (
  { ofType }: ProgramsType = { ofType: null }
) => {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  let programs

  if (ofType) {
    programs = filterProgramsByType({ programs: data, type: ofType })
  } else {
    programs = data
  }

  const paths = programs.map(program => ({
    params: { studyFieldSlug: program.studyFieldSlug || 'studyfield' }
  }))

  return paths
}

export default fetchProgramsPaths
