import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'
import Professions from '@/components/programs/Professions'

const Programs = ({ withTitle = false, withBtn = false, programs = [] }) => {
  const courses = programs.filter(
    program => program.type && program.type.toLowerCase() === 'course'
  )

  const professions = programs.filter(
    program => program.type && program.type.toLowerCase() === 'profession'
  )
  return (
    <section className={stls.container}>
      <Wrapper>
        {withTitle && <h2 className={stls.title}>Наши программы</h2>}
        <div className={stls.programs}>
          {courses && courses.length > 0 && (
            <Courses
              biggerTitle={!withTitle}
              withBtn={withBtn}
              courses={courses}
            />
          )}
          {professions && professions.length > 0 && (
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
