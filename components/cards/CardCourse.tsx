import stls from '@/styles/components/cards/CardCourse.module.sass'
import { ImgCourse1 } from '@/components/imgs'
import Link from 'next/link'
import { routeCourses } from '@/data/routes'

const CardCourse = ({ course = null }) => {
  return (
    <Link href={`${routeCourses}/${course.slug}`}>
      <a className={stls.container}>
        <div className={stls.img}>
          <ImgCourse1 />
        </div>
        <div className={stls.right}>
          <div className={stls.info}>
            <span className={stls.type}>{course.typeLabel}</span>
            <span className={stls.dur}>
              {course.studyMounthsDuration} месяца
            </span>
          </div>
          <h4 className={stls.title}>{course.title}</h4>
        </div>
      </a>
    </Link>
  )
}

export default CardCourse
