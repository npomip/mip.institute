import { useReducer } from 'react'
import ProgramContext from '@/context/program/programContext'
import programReducer from '@/context/program/programReducer'
import { SET_PROGRAM } from '@/context/types'
import { convertMdToHtml } from '@/helpers/index'

const ProgramState = props => {
  const initialState = {
    program: {}
  }

  const [state, dispatch] = useReducer(programReducer, initialState)

  const setProgram = (program = []) => {
    console.log(program)
    const programPayload =
      convertMdToHtml({
        arr: [{ ...program }],
        params: [
          'description',
          'WhatYouWillLearn',
          'ForWhom',
          'shortContents',
          'resumeSkills',
          'jobTitles',
          'questions'
        ]
      })?.[0] || null

    dispatch({ type: SET_PROGRAM, payload: programPayload })
  }

  return (
    <ProgramContext.Provider
      value={{
        program: state.program,
        setProgram
      }}>
      {props.children}
    </ProgramContext.Provider>
  )
}

export default ProgramState
