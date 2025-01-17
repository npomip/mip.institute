import { useCallback, useRef, useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './PracticalSteps.module.sass'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/css/effect-fade'
import { EffectFade } from 'swiper/modules'
import CubicBlockThreeSide from '@/components/sections/practicalTraining/PracticalSteps/CubicBlockThreeSide/CubicBlockThreeSide'
import Wrapper from '@/ui/Wrapper'
import StepBlocks from '../StepBlocks/StepBlocks'
import IconPracticalStepNext from '@/components/icons/IconPracticalStepNext'

const PracticalSteps = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isAnimationTriggered, setIsAnimationTriggered] = useState<boolean>(false)
  const swiperRef = useRef(null)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  if (!isMobileAndTabletLayout) {
    SwiperCore.use([EffectFade])
  }

  const handleSlideChange = (swiper: SwiperClass) => {
    const newIndex = swiper.activeIndex
    setCurrentIndex(newIndex)
  }

  const handleStepClick = useCallback((index: number) => {
    setCurrentIndex(index)
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index)
    }
  }, [])

  const handleMouseEnterSection = useCallback(() => {
    if (isAnimationTriggered) return

    let newIndex = currentIndex
    const totalSteps = 2
    setIsAnimationTriggered(true)
    const interval = setInterval(() => {
      if (newIndex <= totalSteps) {
        setCurrentIndex(newIndex)
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(newIndex)
        }
        newIndex += 1
      } else {
        clearInterval(interval)
      }
    }, 1000)
  }, [currentIndex, isAnimationTriggered])

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer} onMouseEnter={handleMouseEnterSection}>
          <h2 className={stls.title}>Шаги практики</h2>
          {isMobileAndTabletLayout && (
            <div className={stls.iconMob}>
              <IconPracticalStepNext />
            </div>
          )}
          {isMobileAndTabletLayout && (
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              spaceBetween={10}
              speed={800}
              className={stls.myMobSwiper}
              onSlideChange={handleSlideChange}
              style={{ height: '30rem', width: '100%' }}>
              {practicalTrainSteps.map(el => (
                <SwiperSlide key={`${el.id}+${el.title}`} className={stls.slide}>
                  <CubicBlockThreeSide
                    title={el.title}
                    subtitle={el.subtitle}
                    src={el.src}
                    mobHeight={el.mobHeight}
                    fullText={el.fullText}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <Swiper
            direction={isMobileAndTabletLayout ? 'horizontal' : 'vertical'}
            slidesPerView={1}
            spaceBetween={isMobileAndTabletLayout ? 10 : 0}
            effect={isMobileAndTabletLayout ? 'slide' : 'fade'}
            fadeEffect={isMobileAndTabletLayout ? undefined : { crossFade: true }}
            speed={800}
            className={stls.mySwiper}
            initialSlide={currentIndex}
            ref={swiperRef}
            onSlideChange={swiper => setCurrentIndex(swiper.activeIndex)}
            style={{ height: '30rem', width: '100%' }}>
            <StepBlocks currentIndex={currentIndex} onStepClick={handleStepClick} />
            {practicalTrainSteps.map(el => (
              <SwiperSlide key={`${el.id}+${el.title}`} className={stls.slide}>
                <CubicBlockThreeSide
                  title={el.title}
                  subtitle={el.subtitle}
                  src={el.src}
                  mobHeight={el.mobHeight}
                  fullText={el.fullText}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
