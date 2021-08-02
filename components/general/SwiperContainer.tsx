import stls from '@/styles/components/general/SwiperContainer.module.sass'
import { useMediaQuery } from 'react-responsive'

import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  slides,
  mobileSlidesNum = 1,
  laptopSlidesNum = 2,
  desktopSlidesNum = 2,
  alwaysDisabledOnDesktop = false,
  isMultiRow = false
}) => {
  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' })
  const isLaptopLayout = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1200px)'
  })

  const assignNumOfSlidesPerView = () => {
    const layoutOptions = [
      {
        name: 'mobile',
        isApplicable: isMobileLayout,
        slidesNum: mobileSlidesNum
      },
      {
        name: 'laptop',
        isApplicable: isLaptopLayout,
        slidesNum: laptopSlidesNum
      },
      {
        name: 'desktop',
        isApplicable: !isMobileLayout && !isLaptopLayout,
        slidesNum: desktopSlidesNum
      }
    ]

    return layoutOptions.find(layoutOption => layoutOption.isApplicable)
      .slidesNum
  }

  const checkIfSwiperEnabled = () => {
    if (isMobileLayout) return true

    if (alwaysDisabledOnDesktop && !isMobileLayout) return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides.length)
  }

  return (
    <Swiper
      enabled={checkIfSwiperEnabled()}
      spaceBetween={50}
      slidesPerView={mobileSlidesNum}
      slidesPerColumn={isMultiRow && !isMobileLayout ? 2 : 1}
      slidesPerColumnFill={!isMobileLayout ? 'row' : 'column'}
      breakpoints={{
        0: {
          slidesPerView: mobileSlidesNum
        },
        768: {
          slidesPerView: laptopSlidesNum
        },
        1200: {
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
