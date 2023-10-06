import stls from '@/styles/components/general/SwiperContainer.module.sass'
import Popup from 'reactjs-popup'
import SwiperCore, { Navigation, Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames'
import { PopupImage } from '../popups'
import CustomNextButton from './CustomNextButton'
import CustomPrevButton from './CustomPrevButton'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

SwiperCore.use([Navigation, Pagination])

const SwiperContainer = ({
  teachers = false,
  topCourses=false,
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
  isMultiRow = false,
  initialSlide=0
}) => {
  const isMobileLayout = useBetterMediaQuery( '(max-width: 480px)')
  const isTabletLayout = useBetterMediaQuery( '(min-width: 481px) and (max-width: 768px)'
  )
  const isLaptopLayout = useBetterMediaQuery('(min-width: 768px) and (max-width: 1200px)')
  const isDesktopLayout = useBetterMediaQuery('(min-width: 1201px)')

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

// console.log(slides)
  return (
    <Swiper
      navigation={{
        prevEl: '.custom-prev-button',
        nextEl: '.custom-next-button',
      }}
      loop={true}
      initialSlide={0}
      speed={250}
      enabled={checkIfSwiperEnabled()}
      spaceBetween={getSpaceBetween()}
      slidesPerView={assignNumOfSlidesPerView()}
      modules={[Grid]}
      grid={{
        rows: isMultiRow && (isLaptopLayout || isDesktopLayout) ? 2 : 1,
        fill: !isMobileLayout ? 'row' : 'column'
      }}
      // autoHeight={true}
      pagination={(isMobileLayout || isTabletLayout) && !topCourses ? { clickable: true, dynamicBullets: true } : false}
      className={classNames({
        [stls.container]: true,
        [stls.teachers]: teachers,
        [stls.diplomas]: diplomas,
        [stls.reviews]: reviews,
        [stls.topCourses]: topCourses,
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
        <CustomPrevButton reviewPrevBtn={reviewPrevBtn}
          />
      </div>
        <div className="custom-next-button-container">
        <CustomNextButton reviewNextBtn={reviewNextBtn}
          />
      </div> 
        
    </Swiper>
  )
}

export default SwiperContainer
