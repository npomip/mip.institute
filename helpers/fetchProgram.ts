import { backRootUrl, programsUrl } from '@/config/index'
import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  ofType: 'course' | 'profession'
  slug: string
}

const fetchProgram = async ({ ofType, slug }: ProgramsType) => {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const programs = filterProgramsByType({ programs: data, type: ofType })

  const program = convertMdToHtml({
    arr: programs.filter(program => program.slug === slug),
    params: ['description']
  })[0]

  return program
}

export default fetchProgram
