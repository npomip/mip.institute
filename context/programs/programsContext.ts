import { createContext } from 'react'

const programsContext = createContext({
  programs: [],
  courses: [],
  professions: [],
  studyFields: [],
  studyFieldsProfessions: [],
  studyFieldsCourses: [],
  curProgramsType: null,
  curProgramsStudyFieldSlug: null,
  setPrograms: programs => {},
  setCurProgramsType: programType => {},
  setCurProgramsStudyFieldSlug: slug => {}
})

export default programsContext
