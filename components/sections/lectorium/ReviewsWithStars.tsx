import CardReviewWithStars from '@/components/cards/CardReviewWithStars'
import { IconFinger } from '@/components/icons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/lectorium/ReviewsWithStars.module.sass'
import Tag from '@/ui/Tag'
import Wrapper from '@/ui/Wrapper'
import reviewsDefault from 'constants/lectoriumReviews'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Scrollbar])

const ReviewsWithStars = ({ reviews }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <div className={stls.tag}>
            <Tag type='purple'>Что о нас говорят</Tag>
          </div>
          <h2 className={stls.title}>
            <span className={stls.colouredTitle}>Отзывы </span>с прошедших
            мероприятий
          </h2>
        </div>
        <div className={stls.slides}>
          <Swiper
            scrollbar
            slidesPerView={isMobileAndTabletLayout ? 1.5 : 4}
            spaceBetween={isMobileAndTabletLayout ? 10 : 30}
            modules={[Scrollbar]}>
            {(reviews.length > 0 ? reviews : reviewsDefault).map(
              (review, idx) => (
                <SwiperSlide key={review + idx}>
                  <div className={stls.cards}>
                    <CardReviewWithStars
                      review={review}
                      key={idx}
                      number={idx}
                    />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        <div className={stls.finger}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default ReviewsWithStars
