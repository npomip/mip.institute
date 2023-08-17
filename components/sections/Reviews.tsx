import stls from '@/styles/components/sections/Reviews.module.sass'
import classNames from 'classnames'
import { getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardReview from '@/components/cards/CardReview'
import { ImgReview } from '@/components/imgs'
import { useContext } from 'react'
import { ContextStaticProps } from '@/context/index'

type ReviewsType = {
  standalone?: boolean
  reviews: any,
  reviewsRef?: any
}

const Reviews = ({ standalone = false, reviews, reviewsRef }: ReviewsType) => {
  const slides = reviews?.map((review, idx) => (
    <CardReview
      key={review.title + idx}
      title={review.title}
      photo={
        <ImgReview
          src={review?.picture?.[0]?.url}
          alt={review.name}
          width={110}
          height={getImageHeight({
            width: 110,
            widthInitial: review?.picture?.[0]?.width,
            heightInitial: review?.picture?.[0]?.height
          })}
        />
      }
      name={review.name}
      occupation={review.profession}
      story={review.story}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 1.39,
    spaceBetween: 30
  }
  const laptopSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 30
  }
  const tabletSwiperOptions = {
    slidesNum: 1.3,
    spaceBetween: 40
  }
  const mobileSwiperOptions = {
    slidesNum: 1.3,
    spaceBetween: 40
  }
  return (
    <section
      ref={reviewsRef}
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <p className={stls.reviewCount}>{reviews.length} отзывов</p>
        <h2 className={stls.title}>Отзывы наших студентов</h2>
        <div className={stls.content}>
          <SwiperContainer reviewPrevBtn reviewNextBtn 
          reviews 
          slides={slides}
          desktopOptions={desktopSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          mobileOptions={mobileSwiperOptions}/>
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
