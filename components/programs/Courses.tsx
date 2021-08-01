import stls from '@/styles/components/programs/Courses.module.sass'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'
import courses from '@/data/programs/courses'

const Courses = () => {
  return (
    <div className={stls.courses}>
      <hgroup>
        <h3 className={stls.title}>Курсы</h3>
        <p className={stls.subTitle}>
          Короткие программы, чтобы изучить один конкретный навык
        </p>
      </hgroup>
      <div>
        {courses.map((course, idx) => (
          <CardCourse key={course.title + idx} course={course} />
        ))}
      </div>
      <BtnDelta text={'Смотреть все курсы'} />
    </div>
  )
}

export default Courses
