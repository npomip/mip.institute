import { useReducer } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import programsReducer from '@/context/programs/programsReducer'
import { SET_PROGRAMS } from '@/context/types'

const ProgramsState = props => {
  const initialState = {
    programs: [],
    courses: [],
    professions: [],
    studyFields: []
  }

  const [state, dispatch] = useReducer(programsReducer, initialState)

  const setPrograms = (programs = []) => {
    dispatch({ type: SET_PROGRAMS, payload: programs })
  }

  return (
    <ProgramsContext.Provider
      value={{
        programs: state.programs,
        courses: state.courses,
        professions: state.professions,
        studyFields: state.studyFields,
        setPrograms
      }}>
      {props.children}
    </ProgramsContext.Provider>
  )
}

export default ProgramsState
