import React, { useState } from 'react'
import stls from '@/styles/components/practicalTraining/PracticalSteps.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Wrapper from '../layout/Wrapper'
import SwiperCore, { Mousewheel, EffectFade, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import CubicBlockThreeSide from '../general/CubicBlockThreeSide'
import StepBlocks from './StepBlocks'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery';
import IconPracticalStepNext from '../icons/IconPracticalStepNext'


SwiperCore.use([Mousewheel, EffectFade, EffectCoverflow])

type Props = {
  points: TermPoint[]
}

const PracticalSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)');

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    setCurrentIndex(newIndex);
  };

  return (
    <section className={stls.container}>
      <Wrapper>
          <h2 className={stls.title}>Шаги практики</h2>
          {isMobileAndTabletLayout &&
          <div className={stls.iconMob}>
            <IconPracticalStepNext />
          </div>
           }
            <Swiper
              direction={isMobileAndTabletLayout ? 'horizontal' : 'vertical'}
              slidesPerView={1}
              spaceBetween={isMobileAndTabletLayout ? 10 : 0}
              mousewheel={{
                releaseOnEdges: true
              }}
              effect={'fade'}
              fadeEffect={{
                crossFade: true
              }}
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
                  <CubicBlockThreeSide title={el.title} subtitle={el.subtitle} src={el.src}/>
                </SwiperSlide>
              )}
            </Swiper>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
