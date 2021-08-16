import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  setPrograms: programs => {}
})

export default programsContext
