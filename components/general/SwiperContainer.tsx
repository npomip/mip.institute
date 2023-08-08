import stls from '@/styles/components/general/SwiperContainer.module.sass'
import { useMediaQuery } from 'react-responsive'
import Popup from 'reactjs-popup'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'
import { PopupImage } from '../popups'
import CustomNextButton from './CustomNextButton'
import CustomPrevButton from './CustomPrevButton'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  teachers = false,
  diplomas = false,
  reviews = false,
  reviewNextBtn = false,
  reviewPrevBtn = false,
  slides,
  mobileOptions = { slidesNum: 1, spaceBetween: 10 },
  tabletOptions = { slidesNum: 1, spaceBetween: 10 },
  laptopOptions = { slidesNum: 2, spaceBetween: 10 },
  desktopOptions = { slidesNum: 2, spaceBetween: 50 },
  alwaysDisabledOnDesktop = false,
  isMultiRow = false
}) => {
  const isMobileLayout = useMediaQuery({ query: '(max-width: 480px)' })
  const isTabletLayout = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  })
  const isLaptopLayout = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1200px)'
  })
  const isDesktopLayout = useMediaQuery({ query: '(min-width: 1201px)' })

  const layouts = [
    { mobile: isMobileLayout },
    { tablet: isTabletLayout },
    { laptop: isLaptopLayout },
    { desktop: isDesktopLayout }
  ]

  const getCurrentLayoutKey = () => {
    const currentLayout = layouts.find(layout => {
      const firstKey = Object.keys(layout)[0]

      if (layout[firstKey]) return layout
    })

    if (!currentLayout) return null

    const currentLayoutKey = Object.keys(currentLayout)[0]

    return currentLayoutKey
  }

  const swiperOptions = {
    mobile: mobileOptions,
    tablet: tabletOptions,
    laptop: laptopOptions,
    desktop: desktopOptions
  }

  const assignNumOfSlidesPerView = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 0

    const { slidesNum } = swiperOptions[currentLayoutKey]

    return slidesNum
  }

  const checkIfSwiperEnabled = () => {
    if (alwaysDisabledOnDesktop && (isLaptopLayout || isDesktopLayout))
      return false

    const slidesPerView = assignNumOfSlidesPerView()

    return !(slidesPerView === slides && slides.length)
  }

  const getSpaceBetween = () => {
    const currentLayoutKey = getCurrentLayoutKey()

    if (!currentLayoutKey) return 10

    return swiperOptions[currentLayoutKey].spaceBetween
  }

  const goNext = () => {
    // Ваша логика для перехода к следующему слайду
    // console.log('Next Slide');
  };
  const goPrev = () => {
    // Ваша логика для перехода к предыдущему слайду
    console.log('Previous Slide');
  };
  return (
    <Swiper
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button',
      }}
      enabled={checkIfSwiperEnabled()}
      spaceBetween={getSpaceBetween()}
      slidesPerView={assignNumOfSlidesPerView()}
      modules={[Grid]}
      grid={{
        rows: isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1,
        fill: !isMobileLayout ? 'row' : 'column'
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      className={classNames({
        [stls.container]: true,
        [stls.teachers]: teachers,
        [stls.diplomas]: diplomas,
        [stls.reviews]: reviews,
      })}>
      {slides &&
        slides.map((slide, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            {diplomas ? (
              <Popup trigger={<div>{slide}</div>} modal nested>
                {close => <PopupImage image={slide} close={close} />}
              </Popup>
            ) : (
              slide
            )}
          </SwiperSlide>
        ))}
        
        {/* {!isMobileLayout && (
          <> */}
          <div className="custom-prev-button-container">
        <CustomPrevButton reviewPrevBtn={reviewPrevBtn}  />
      </div>
        <div className="custom-next-button-container">
        <CustomNextButton reviewNextBtn={reviewPrevBtn}  />
      </div> 
        {/* </>
        )} */}
        
    </Swiper>
  )
}

export default SwiperContainer
