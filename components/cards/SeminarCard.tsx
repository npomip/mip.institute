import stls from '@/styles/components/cards/SeminarCard.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SeminarCard = ({ seminar }) => {
  // console.log(seminar)
  // const newDate = new Date(seminar.date)
  const dateOfCourse = new Date(seminar.date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })

  // console.log(newDate)
  return (
    <Link
      passHref
      href={`${routes.front.seminars}/${
        seminar.studyFieldSlug || 'studyfield'
      }/${seminar.slug}`}>
        <div className={stls.seminarCard}>
          <p>{seminar.title}</p>
          <p className={stls.seminarCardTag}>{seminar.studyField}</p>
          <p>{dateOfCourse}</p>
        </div>
    </Link>
  )
}

export default SeminarCard
