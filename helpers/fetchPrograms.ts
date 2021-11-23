import { routesBack } from '@/config/index'
import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  ofType: 'course' | 'profession'
}

const fetchPrograms = async ({ ofType }: ProgramsType = { ofType: null }) => {
  const res = await fetch(`${routesBack.root}${routesBack.programs}`)
  const data = await res.json()

  const programs = convertMdToHtml({
    arr: ofType ? filterProgramsByType({ programs: data, type: ofType }) : data,
    params: ['description']
  })

  return programs
}

export default fetchPrograms
