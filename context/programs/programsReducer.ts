import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG
} from '@/context/types'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'

const programsReducer = (state, action) => {
  switch (action.type) {
    case SET_PROGRAMS:
      const programs = action.payload

      const courses = filterProgramsByType({ programs, type: 'course' })

      const professions = filterProgramsByType({ programs, type: 'profession' })

      const studyFields = getStudyFields(programs)

      return {
        ...state,
        programs,
        courses,
        professions,
        studyFields
      }
    case SET_CUR_PROGRAMS_TYPE:
      return {
        ...state,
        curProgramsType: action.payload
      }
    case SET_CUR_PROGRAMS_STUDY_FIELD_SLUG:
      return {
        ...state,
        curProgramsStudyFieldSlug: action.payload
      }
    default:
      return state
  }
}

export default programsReducer
