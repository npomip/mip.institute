import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'

const Programs = ({ withTitle = false, withBtn = false, programs = [] }) => {
  const courses = programs.filter(
    program => program.type && program.type.toLowerCase() === 'course'
  )
  return (
    <section className={stls.container}>
      <Wrapper>
        {withTitle && <h2 className={stls.title}>Наши программы</h2>}
        <div className={stls.programs}>
          <Courses
            biggerTitle={!withTitle}
            withBtn={withBtn}
            courses={courses}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
