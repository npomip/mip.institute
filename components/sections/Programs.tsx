import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'

const Programs = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Наши программы</h2>
        <div className={stls.programs}>
          <Courses />
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
