import React, { useState } from 'react'
import stls from '@/styles/components/practicalTraining/PracticalSteps.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Wrapper from '../layout/Wrapper'
import SwiperCore from 'swiper'
import { Mousewheel, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import CubicBlockThreeSide from '../general/CubicBlockThreeSide'
import StepBlocks from './StepBlocks'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery';
import IconPracticalStepNext from '../icons/IconPracticalStepNext'

type Props = {
  points: TermPoint[]
}

const PracticalSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)');

  if (!isMobileAndTabletLayout) {
    SwiperCore.use([Mousewheel, EffectFade]);
  }
  
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer}>
          <h2 className={stls.title}>Шаги практики</h2>
          {isMobileAndTabletLayout &&
            <div className={stls.iconMob}>
              <IconPracticalStepNext />
            </div>
          }
          {isMobileAndTabletLayout && 
            <Swiper
              direction={'horizontal'}
              slidesPerView={1}
              spaceBetween={10}
              speed={800}
              className={stls.myMobSwiper}
              onSlideChange={handleSlideChange}
              style={{ height: '30rem', width: '100%' }}
              >
              {practicalTrainSteps.map((el) => 
                <SwiperSlide 
                key={`${el.id}+${el.title}`}
                className={stls.slide}
                >
                  <CubicBlockThreeSide title={el.title} subtitle={el.subtitle} src={el.src} mobHeight={el.mobHeight} fullText={el.fullText}/>
                </SwiperSlide>
              )}
            </Swiper>
          }
            <Swiper
              direction={isMobileAndTabletLayout ? 'horizontal' : 'vertical'}
              slidesPerView={1}
              spaceBetween={isMobileAndTabletLayout ? 10 : 0}
              mousewheel={!isMobileAndTabletLayout ? { releaseOnEdges: true } : false}
              effect={isMobileAndTabletLayout ? 'slide' : 'fade'}
              fadeEffect={!isMobileAndTabletLayout ? { crossFade: true } : undefined}
              speed={800}
              className={stls.mySwiper}
              onSlideChange={handleSlideChange}
              style={{ height: '30rem', width: '100%' }}
              >
              <StepBlocks currentIndex={currentIndex}/>
              {practicalTrainSteps.map((el) => 
                <SwiperSlide 
                key={`${el.id}+${el.title}`}
                className={stls.slide}
                >
                  <CubicBlockThreeSide title={el.title} subtitle={el.subtitle} src={el.src} mobHeight={el.mobHeight} fullText={el.fullText}/>
                </SwiperSlide>
              )}
            </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
