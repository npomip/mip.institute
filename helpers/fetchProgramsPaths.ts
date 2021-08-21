import { backRootUrl, programsUrl } from '@/config/index'
import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  ofType: 'course' | 'profession'
}

const fetchProgramsPaths = async ({ ofType }: ProgramsType) => {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const programs = filterProgramsByType({ programs: data, type: ofType })

  const paths = programs.map(program => ({
    params: { slug: program.slug }
  }))

  return paths
}

export default fetchProgramsPaths
