import stls from '@/styles/components/cards/CardCourse.module.sass'
import Link from 'next/link'
import { routeCourses } from '@/data/routes'
import { getCasedRuMonthString } from '@/helpers/index'
import classNames from 'classnames'
import { IconArrowRight } from '@/components/icons'

const CardCourse = ({ course = null, threerow = false }) => {
  return (
    <Link
      href={`${routeCourses}/${course.studyFieldSlug || 'studyfield'}/${
        course.slug
      }`}>
      <a
        className={classNames({
          [stls.container]: true,
          [stls.threerow]: threerow,
          [stls.fourrow]: !threerow
        })}>
        <span className={stls.type}>{course.typeLabel}</span>
        <h4 className={stls.title}>{course.title}</h4>
        {course.studyMounthsDuration && (
          <div className={stls.dur}>
            {getCasedRuMonthString(course.studyMounthsDuration)}
          </div>
        )}
        <div className={stls.arrowRight}>
          <IconArrowRight />{' '}
        </div>
      </a>
    </Link>
  )
}

export default CardCourse
