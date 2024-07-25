import { ImgTeacher } from '@/components/imgs'
import Wrapper from '@/components/layout/Wrapper'
import { getImageHeight } from '@/helpers/index'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/carousel/BachelorCarousel.module.sass'
import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import BachelorSlugCard from '../cards/BachelorSlugCard'

const BachelorCarousel = ({ title, subtitle, cards }) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery(
    '(min-width: 481px) and (max-width: 768px)'
  )
  const isLaptopLayout = useBetterMediaQuery(
    '(min-width: 769px) and (max-width: 1200px)'
  )

  const list = cards.map(teacher => ({
    ...teacher,
    image: (
      <ImgTeacher
        src={teacher?.portrait?.url}
        alt={teacher.name}
        width={160}
        height={getImageHeight({
          width: 160,
          widthInitial: teacher?.portrait?.width,
          heightInitial: teacher?.portrait?.height
        })}
      />
    )
  }))

  return (
    <section
      className={classNames({
        [stls.container]: true
      })}>
      <Wrapper>
        <h2 className={stls.title}>{title}</h2>
        <p className={stls.subtitle}>{subtitle}</p>
        <div className={stls.teachers}>
          <Swiper
            slidesPerView={
              isMobileLayout || isTabletLayout ? 1 : isLaptopLayout ? 2 : 3
            }
            spaceBetween={30}
            scrollbar={isMobileLayout || isTabletLayout ? true : false}
            className={stls.mySwiper}>
            {list?.map((card, idx) => (
              <SwiperSlide key={card.title + idx} className={stls.slide}>
                <BachelorSlugCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default BachelorCarousel
