import { useContext, useEffect } from 'react'
import { ContextStaticProps } from '@/context/index'
import { filterProgramsByType, getStudyFields } from '@/helpers/index'

type THandleContextStaticPropsProps = {
  program?: any
  seminar?: any
  programs?: any[]
  curProgramsType?: string | null
  curProgramsStudyFieldSlug?: string | null
  tickets_quantity?: number
  bachelor?: any
  bachelors?: any[]
}

const useHandleContextStaticProps = ({
  program,
  programs,
  seminar,
  curProgramsType,
  curProgramsStudyFieldSlug,
  bachelor,
  bachelors,
  tickets_quantity
}: THandleContextStaticPropsProps) => {
  const {
    setSeminar,
  setProgram,
    setPrograms,
    setCourses,
    setProfessions,
    setStudyFields,
    setStudyFieldsProfessions,
    setStudyFieldsCourses,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    setBachelor,
    setBachelors
  } = useContext(ContextStaticProps)

  useEffect(() => {
    console.log(bachelor);
    
    const courses =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'course' })
        : []
    const professions =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'profession' })
        : []
    setSeminar(seminar || null)
    setProgram(program || null)
    setBachelor(bachelor || null)
    setBachelors(bachelors || [])
    setPrograms(programs || null)
    setCourses(courses || null)
    setProfessions(professions || null)

    setStudyFields(programs?.length > 0 ? getStudyFields(programs) : [])

    setStudyFieldsProfessions(
      programs?.length > 0 ? getStudyFields(professions) : []
    )
    setStudyFieldsCourses(programs?.length > 0 ? getStudyFields(courses) : [])

    setCurProgramsType(curProgramsType || null)
    setCurProgramsStudyFieldSlug(curProgramsStudyFieldSlug || null)
  }, [curProgramsStudyFieldSlug, curProgramsType, program, programs, seminar, bachelor, bachelors])
}

export default useHandleContextStaticProps
