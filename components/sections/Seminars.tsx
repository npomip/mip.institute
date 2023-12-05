import stls from '@/styles/components/sections/Reviews.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any,
  onMain?: boolean
}

const Seminars = ({seminars}) => {
  // console.log(seminars)
  return (
    <>
    <div>
      <h2>Seminars:</h2>
        {seminars?.map(seminar => (
          <Link key={seminar.id} passHref
          href={`${routes.front.seminars}/${seminar.studyFieldSlug || 'studyfield'}/${
            seminar.slug
          }`}>
          <p >{seminar.title}</p>
          </Link>
        ))}
    </div>
    </>
  )
}

export default Seminars
