import { backRootUrl, programsUrl } from '@/config/index'
import { convertMdToHtml, filterProgramsByType } from '@/helpers/index'

type ProgramsType = {
  only: 'courses' | 'professions' | ''
}

const fetchPrograms = async ({ only = '' }: ProgramsType = { only: '' }) => {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  let data = await res.json()

  const programs = convertMdToHtml({
    arr:
      only === 'courses'
        ? filterProgramsByType({ programs: data, type: 'course' })
        : only === 'professions'
        ? filterProgramsByType({ programs: data, type: 'profession' })
        : data,
    param: 'description'
  })

  return programs
}

export default fetchPrograms
