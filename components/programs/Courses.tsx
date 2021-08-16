import stls from '@/styles/components/programs/Courses.module.sass'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'

const Courses = ({ titleless = false, courses = [] }) => {
  return (
    <div className={stls.container}>
      <hgroup>
        {!titleless ? (
          <h3 className={stls.title}>Курсы</h3>
        ) : (
          <h2
            className={classNames({
              [stls.title]: true,
              [stls.bold]: titleless
            })}>
            Курсы
          </h2>
        )}

        <p className={stls.subTitle}>
          Короткие программы, чтобы изучить один конкретный навык
        </p>
      </hgroup>
      <div className={stls.courses}>
        {courses.map((course, idx) => (
          <CardCourse key={course.title + idx} course={course} />
        ))}
      </div>
      <div className={stls.btn}>
        <BtnDelta text={'Смотреть все курсы'} />
      </div>
    </div>
  )
}

export default Courses
