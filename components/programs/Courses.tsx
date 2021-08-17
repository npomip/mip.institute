import stls from '@/styles/components/programs/Courses.module.sass'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import { routeCourses } from '@/data/routes'

const Courses = ({ biggerTitle = false, withBtn = false, courses = [] }) => {
  return (
    <div className={stls.container}>
      <hgroup>
        {biggerTitle ? (
          <h2
            className={classNames({
              [stls.title]: true,
              [stls.bold]: true
            })}>
            Курсы
          </h2>
        ) : (
          <h3 className={stls.title}>Курсы</h3>
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
      {withBtn && (
        <div className={stls.btn}>
          <BtnDelta text={'Смотреть все курсы'} href={routeCourses} />
        </div>
      )}
    </div>
  )
}

export default Courses
