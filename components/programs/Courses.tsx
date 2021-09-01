import stls from '@/styles/components/programs/Courses.module.sass'
import CardCourse from '@/components/cards/CardCourse'
import { BtnDelta } from '@/components/btns'
import classNames from 'classnames'
import { routeCourses } from '@/data/routes'
import ProgramsQty from '@/components/general/ProgramsQty'

const Courses = ({ biggerTitle = false, withBtn = false, courses = [] }) => {
  return (
    <div className={stls.container}>
      <hgroup>
        {biggerTitle ? (
          <div className={stls.heading}>
            <h2
              className={classNames({
                [stls.title]: true,
                [stls.bold]: true
              })}>
              Курсы
            </h2>
            <ProgramsQty qty={courses.length} ofType='course' />
          </div>
        ) : (
          <div className={stls.heading}>
            <h3 className={stls.title}>Курсы</h3>
            <ProgramsQty qty={courses.length} ofType='course' />
          </div>
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
