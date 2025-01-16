import {
  filterProgramsByType,
  getStudyFields,
  sortBasedOnNumericOrder
} from '@/helpers/index'

const getDefaultStateProps = pageProps => {
  const program = pageProps.program || null
  const bachelor = pageProps.bachelor || null
  const practicalTrainings = pageProps.practicalTrainings || null
  const programs =
    sortBasedOnNumericOrder({ programs: pageProps.programs }) || []
  const courses =
    programs?.length > 0
      ? filterProgramsByType({ programs, type: 'course' })
      : []
  const professions =
    programs?.length > 0
      ? filterProgramsByType({ programs, type: 'profession' })
      : []
  const blogs = pageProps.seminars
  const seminar = pageProps.seminar || null
  const studyFields = programs?.length > 0 ? getStudyFields(programs) : []

  const studyFieldsProfessions =
    programs?.length > 0 ? getStudyFields(professions) : []

  const studyFieldsCourses = programs?.length > 0 ? getStudyFields(courses) : []

  const curProgramsType = pageProps.curProgramsType || null
  const curProgramsStudyFieldSlug = pageProps.studyFieldSlug || null
  const reviews = pageProps.reviews
  const searchTerm = pageProps.searchTerm || null

  const filteredPrograms = pageProps.filteredPrograms || []

  return {
    program,
    programs,
    reviews,
    courses,
    professions,
    studyFields,
    studyFieldsProfessions,
    studyFieldsCourses,
    curProgramsType,
    curProgramsStudyFieldSlug,
    searchTerm,
    filteredPrograms,
    blogs,
    seminar,
    bachelor,
    practicalTrainings
  }
}

export default getDefaultStateProps
