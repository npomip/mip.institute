import Wrapper from '@/ui/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import person from '@/public/assets/imgs/practicalTraining/person.png'
import stls from './PracticalReviews.module.sass'
import { ReviewType } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { useRef } from 'react'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PracticalReviewsCard from './PracticalReviewsCard/PracticalReviewsCard'
import loadIcon from '@/helpers/general/loadIcon'

SwiperCore.use([Scrollbar])

type Props = {
  review: ReviewType[]
}

const PracticalReviews = ({ review }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const fingerRef = useRef(null)

  return (
    <section ref={fingerRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.colouredTitle}> Отзывы </span>
          студентов
        </h2>
        <Swiper
          slidesPerView={isMobileAndTabletLayout ? 1 : 3}
          spaceBetween={31}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          speed={2000}
          scrollbar={!isMobileAndTabletLayout}
          modules={[Scrollbar]}
          className={stls.mySwiper}>
          {review.map((el, idx) => (
            <SwiperSlide key={idx} className={stls.slide}>
              <PracticalReviewsCard
                key={el.slide[0].answer}
                name={el?.name || 'Елена'}
                image={el?.image || person}
                answer={el.slide[0].answer.replace(/–/g, '<br />–').trim()}
                slides={el.slide}
                number={idx + 1}
                markedTitle
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={stls.finger}>{loadIcon('IconFinger')}</div>
      </Wrapper>
    </section>
  )
}

export default PracticalReviews
