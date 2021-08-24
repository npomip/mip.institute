import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'
import Professions from '@/components/programs/Professions'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'

type ProgramsType = {
  ofType?: 'course' | 'profession'
  withTitle?: boolean
  withBtn?: boolean
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false
}: ProgramsType) => {
  const { courses, professions } = useContext(ProgramsContext)
  return (
    <section className={stls.container}>
      <Wrapper>
        {withTitle && <h2 className={stls.title}>Наши программы</h2>}
        <div className={stls.programs}>
          {ofType === 'course' && courses && courses.length > 0 && (
            <Courses
              biggerTitle={!withTitle}
              withBtn={withBtn}
              courses={courses}
            />
          )}
          {ofType === 'profession' && professions && professions.length > 0 && (
            <Professions
              biggerTitle={!withTitle}
              withBtn={withBtn}
              professions={professions}
            />
          )}

          {!ofType && courses && courses.length > 0 && (
            <Courses
              biggerTitle={!withTitle}
              withBtn={withBtn}
              courses={courses}
            />
          )}

          {!ofType && professions && professions.length > 0 && (
            <Professions
              biggerTitle={!withTitle}
              withBtn={withBtn}
              professions={professions}
            />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
