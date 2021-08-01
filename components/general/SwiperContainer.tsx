import stls from '@/styles/components/general/SwiperContainer.module.sass'
import { useMediaQuery } from 'react-responsive'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  slides,
  mobileSlidesNum = 1,
  desktopSlidesNum = 2
}) => {
  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Swiper
      enabled={isMobileLayout}
      spaceBetween={50}
      slidesPerView={2}
      slidesPerColumn={isMobileLayout ? 1 : 2}
      slidesPerColumnFill={!isMobileLayout ? 'row' : 'column'}
      breakpoints={{
        0: {
          slidesPerView: mobileSlidesNum
        },
        768: {
          slidesPerView: desktopSlidesNum
        }
      }}
      pagination={{ clickable: true, dynamicBullets: true }}>
      {slides.map((slide, idx) => (
        <SwiperSlide key={`slide-${idx}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperContainer
