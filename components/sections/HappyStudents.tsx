import stls from '@/styles/components/sections/HappyStudents.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import IconCurveLineReview from '../icons/IconCurveLineReview'
import Otzovic from '../imgs/footerReviews/Otzovic'
import Tutortop from '../imgs/footerReviews/Tutortop'
import TwoGis from '../imgs/footerReviews/TwoGis'
import Ucheba from '../imgs/footerReviews/Ucheba'
import Ya from '../imgs/footerReviews/Ya'
import Wrapper from '../layout/Wrapper'
import FooterReviews from '../popups/FooterReviews'
import routes from '@/config/routes'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import CardReviewsPlatform from '../cards/CardReviewsPlatform'
import CustomPrevButton from '../general/CustomPrevButton'
import CustomNextButton from '../general/CustomNextButton'
SwiperCore.use([Navigation, Pagination])

const HappyStudents = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const list = [
    {
      node: (
        <FooterReviews href={routes.external.yandex}>
          <Ya />
        </FooterReviews>
      ),
      quantity: '100+',
      rating: '5.0'
    },
    {
      node: (
        <FooterReviews href={routes.external.turtop}>
          <Tutortop />
        </FooterReviews>
      ),
      quantity: '70+',
      rating: '4.7'
    },
    {
      node: (
        <FooterReviews href={routes.external.otzovic}>
          <Otzovic />
        </FooterReviews>
      ),
      quantity: '10+',
      rating: '5.0'
    },
    {
      node: (
        <FooterReviews href={routes.external.twoGis}>
          <TwoGis />
        </FooterReviews>
      ),
      quantity: '7',
      rating: '5.0'
    },
    
    {
      node: (
        <FooterReviews href={routes.external.ucheba}>
          <Ucheba />
        </FooterReviews>
      ),
      quantity: '15',
      rating: '5.0'
    }
  ]

  return (
    <section className={stls.section}>
      <Wrapper>
        <h2 className={stls.title}>Студенты довольны обучением в МИП</h2>
        <div className={stls.content}>
          <div className={stls.textContainer}>
            <IconCurveLineReview
              left={isMobileAndTabletLayout ? 30 : 0}
              height={isMobileAndTabletLayout ? 140 : 241}
            />
            <div className={stls.textblock}>
              <p className={stls.students}>98% студентов считают,</p>
              <p className={stls.program}>
                что программы Московского Института Психологии превзошли их
                ожидания
              </p>
              <p className={stls.portal}>
                Данные исходя из результатов отзывов на ведущих порталах
                сравнения образовательных учреждений
              </p>
            </div>
          </div>
          <div className={stls.reviews}>
            <p className={stls.reviewsSubtitle}>Больше 250 отзывов на различных независимых площадках!</p>
            <Swiper
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
              slidesPerView={isMobileAndTabletLayout ? 1 : 1.6}
              spaceBetween={30}
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className={stls.mySwiper}>
              {list.map((el, i) => (
                <SwiperSlide key={i} className={stls.slide}>
                  <CardReviewsPlatform el={el} />
                </SwiperSlide>
              ))}
              <div className="custom-prev-button-container">
        <CustomPrevButton happyStudents
          />
      </div>
        <div className="custom-next-button-container">
        <CustomNextButton happyStudents
          />
      </div> 
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HappyStudents
