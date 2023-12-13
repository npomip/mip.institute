import stls from '@/styles/components/cards/SeminarCard.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'

type ReviewsType = {
  standalone?: boolean
  reviews: any
  reviewsRef?: any
  onMain?: boolean
}

const SlugCard = ({ item, slug, withDate }) => {
  // console.log(seminar)
    const newDate = new Date(item?.date)
  const dateOfCourse = new Date(item?.date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
  

  console.log(item, slug)
  console.log(`${slug}/${
    item.studyFieldSlug || 'studyfield'
  }/${item.slug}`)
  return (
    <>
    <Link
      passHref
      href={`${routes.front.root}/${slug}/${
        item.studyFieldSlug || 'studyfield'
      }/${item.slug}`}>
        <div className={stls.seminarCard}>
          <p>{item.title}</p>
          <p className={stls.seminarCardTag}>{item.studyField}</p>
          <p>{withDate && dateOfCourse}</p>
        </div>
    </Link>
    </>
  )
}

export default SlugCard
