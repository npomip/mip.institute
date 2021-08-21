import { backRootUrl, programsUrl } from '@/config/index'
import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  ofType: 'course' | 'profession' | null
}

const fetchPrograms = async (
  { ofType = null }: ProgramsType = { ofType: null }
) => {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  let data = await res.json()

  const programs = convertMdToHtml({
    arr: ofType ? filterProgramsByType({ programs: data, type: ofType }) : data,
    params: ['description']
  })

  return programs
}

export default fetchPrograms
