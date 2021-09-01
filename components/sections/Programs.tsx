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
  withQty?: boolean
}

const Programs = ({
  ofType,
  withTitle = false,
  withBtn = false,
  withQty = false
}: ProgramsType) => {
  const { courses, professions } = useContext(ProgramsContext)
  return (
    <section className={stls.container}>
      <Wrapper>
        {withTitle && <h2 className={stls.title}>Наши программы</h2>}
        <div className={stls.programs}>
          {ofType === 'course' && courses && courses.length > 0 && (
            <div className={stls.courses}>
              <Courses
                biggerTitle={!withTitle}
                withBtn={withBtn}
                courses={courses}
                withQty={withQty}
              />
            </div>
          )}
          {ofType === 'profession' && professions && professions.length > 0 && (
            <div className={stls.professions}>
              <Professions
                biggerTitle={!withTitle}
                withBtn={withBtn}
                professions={professions}
                withQty={withQty}
              />
            </div>
          )}

          {!ofType && courses && courses.length > 0 && (
            <div className={stls.courses}>
              <Courses
                biggerTitle={!withTitle}
                withBtn={withBtn}
                courses={courses}
                withQty={withQty}
              />
            </div>
          )}

          {!ofType && professions && professions.length > 0 && (
            <div className={stls.professions}>
              <Professions
                biggerTitle={!withTitle}
                withBtn={withBtn}
                professions={professions}
                withQty={withQty}
              />
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
