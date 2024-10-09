import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/practicalTraining/PracticalSteps.module.sass'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import { useState } from 'react'
import SwiperCore from 'swiper'
import 'swiper/css/effect-fade'
import { EffectFade, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CubicBlockThreeSide from './CubicBlockThreeSide'
import IconPracticalStepNext from '@/components/icons/IconPracticalStepNext'
import Wrapper from '@/ui/Wrapper'
import StepBlocks from './StepBlocks'

const PracticalSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  if (!isMobileAndTabletLayout) {
    SwiperCore.use([Mousewheel, EffectFade])
  }

  const handleSlideChange = swiper => {
    const newIndex = swiper.activeIndex
    setCurrentIndex(newIndex)
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer}>
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
                <SwiperSlide
                  key={`${el.id}+${el.title}`}
                  className={stls.slide}>
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
            mousewheel={
              !isMobileAndTabletLayout ? { releaseOnEdges: true } : false
            }
            effect={isMobileAndTabletLayout ? 'slide' : 'fade'}
            fadeEffect={
              !isMobileAndTabletLayout ? { crossFade: true } : undefined
            }
            speed={800}
            className={stls.mySwiper}
            onSlideChange={handleSlideChange}
            style={{ height: '30rem', width: '100%' }}>
            <StepBlocks currentIndex={currentIndex} />
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
