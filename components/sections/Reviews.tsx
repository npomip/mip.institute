import stls from '@/styles/components/sections/Reviews.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CardReview from '@/components/cards/CardReview'
import maleStudent from '@/public/assets/imgs/general/male-student.jpg'
import femaleStudent from '@/public/assets/imgs/general/female-student.jpg'
import SwiperContainer from '@/components/general/SwiperContainer'
import classNames from 'classnames'
import { ImgReview } from '@/components/imgs'

type ReviewsType = {
  standalone?: boolean
  reviews: any
}

const Reviews = ({ standalone = false, reviews }: ReviewsType) => {
  const studentsReviews = reviews.map(review => ({
    title: review.title,
    name: review.name,
    occupation: review.profession,
    photo: (
      <ImgReview
        src={review.picture[0].formats.small.url}
        alt={review.name}
        width={review.picture[0].formats.small.width}
        height={review.picture[0].formats.small.height}
      />
    )
  }))

  const reviewsSlides = studentsReviews.map((review, idx) => (
    <CardReview
      key={review.name + idx}
      title={review.title}
      photo={review.photo}
      name={review.name}
      occupation={review.occupation}
    />
  ))

  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <h2 className={stls.title}>Отзывы и статьи наших студентов</h2>
        <div className={stls.content}>
          <SwiperContainer slides={reviewsSlides} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
