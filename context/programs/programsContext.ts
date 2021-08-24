import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  setPrograms: programs => {}
})

export default programsContext
