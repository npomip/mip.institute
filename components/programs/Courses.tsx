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
            <div className={stls.phonetablet}>
              <ProgramsQty qty={courses.length} ofType='course' />
            </div>
          </div>
        ) : (
          <div className={stls.heading}>
            <h3 className={stls.title}>Курсы</h3>
            <div className={stls.phonetablet}>
              <ProgramsQty qty={courses.length} ofType='course' />
            </div>
          </div>
        )}

        <div className={stls.underheading}>
          <p className={stls.subTitle}>
            Короткие программы, чтобы изучить один конкретный навык
          </p>
          <div className={stls.laptopdesktop}>
            <ProgramsQty qty={courses.length} ofType='course' dye='bgalpha' />
          </div>
        </div>
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
