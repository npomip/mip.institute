import { SET_PROGRAMS } from '@/context/types'

const programsReducer = (state, action) => {
  switch (action.type) {
    case SET_PROGRAMS:
      const programs = action.payload
      const courses = programs.filter(
        program => program.type && program.type.toLowerCase() === 'course'
      )
      const professions = programs.filter(
        program => program.type && program.type.toLowerCase() === 'profession'
      )
      const studyFieldsWithDuplicates = programs
        .map(item => item.studyField)
        .filter(item => item)

      const studyFields = [...new Set(studyFieldsWithDuplicates)]

      return {
        ...state,
        programs,
        courses,
        professions,
        studyFields
      }
    default:
      return state
  }
}

export default programsReducer
