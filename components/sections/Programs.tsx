import stls from '@/styles/components/sections/Programs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import Courses from '@/components/programs/Courses'

const Programs = ({ titleless = false, programs = [] }) => {
  // console.log(programs)
  return (
    <section className={stls.container}>
      <Wrapper>
        {!titleless && <h2 className={stls.title}>Наши программы</h2>}
        <div className={stls.programs}>
          <Courses titleless={titleless} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Programs
