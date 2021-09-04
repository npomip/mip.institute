import { useReducer } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import {
  SET_PROGRAMS,
  SET_CUR_PROGRAMS_TYPE,
  SET_CUR_PROGRAMS_STUDY_FIELD_SLUG
} from '@/context/types'

const ProgramsState = props => {
  const initialState = {
    programs: [],
    courses: [],
    professions: [],
    studyFields: [],
    studyFieldsCourses: [],
    studyFieldsProfessions: [],
    curProgramsType: null,
    curProgramsStudyFieldSlug: null
  }

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    dispatch({ type: SET_PROGRAMS, payload: programs })
  }

  const setCurProgramsType = (programType: string | null) => {
    dispatch({ type: SET_CUR_PROGRAMS_TYPE, payload: programType })
  }

  const setCurProgramsStudyFieldSlug = (slug: string | null) => {
    dispatch({
      type: SET_CUR_PROGRAMS_STUDY_FIELD_SLUG,
      payload: slug
    })
  }

  return (
    <ProgramsContext.Provider
      value={{
        programs: state.programs,
        courses: state.courses,
        professions: state.professions,
        studyFields: state.studyFields,
        studyFieldsProfessions: state.studyFieldsProfessions,
        studyFieldsCourses: state.studyFieldsCourses,
        curProgramsType: state.curProgramsType,
        curProgramsStudyFieldSlug: state.curProgramsStudyFieldSlug,
        setPrograms,
        setCurProgramsType,
        setCurProgramsStudyFieldSlug
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
