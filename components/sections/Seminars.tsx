import stls from '@/styles/components/sections/Reviews.module.sass'
import classNames from 'classnames'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardReview from '@/components/cards/CardReview'
import { ImgReview } from '@/components/imgs'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'
import TagOrange from '../general/TagOrange'
import Link from 'next/link'
import routes from '@/config/routes'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any,
  onMain?: boolean
}

const Seminars = ({seminars}) => {
  console.log(seminars)
  return (
    <>
    <div>
      <h2>Seminars:</h2>
      <ul>
        {seminars?.map(seminar => (
          <Link key={seminar.id} passHref
          href={`${routes.front.seminars}/${seminar.studyFieldSlug || 'studyfield'}/${
            seminar.slug
          }`}>
          <li >{seminar.title}</li>
          </Link>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Seminars
