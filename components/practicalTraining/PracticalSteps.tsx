import React, { useState } from 'react'
import stls from '@/styles/components/practicalTraining/PracticalSteps.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Wrapper from '../layout/Wrapper'
import SwiperCore, { Mousewheel, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import CubicBlockThreeSide from '../general/CubicBlockThreeSide'
import StepBlocks from './StepBlocks'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'

SwiperCore.use([Mousewheel, EffectFade])

type Props = {
  points: TermPoint[]
}

const PracticalSteps = () => {

  const [rotate, setRotate] = useState(0)
  const [fill, setFill] = useState(0)

  const blocks = [
    { id: 0, height: 25, rotate: 0 },
    { id: 1, height: 75, rotate: 90 },
    { id: 2, height: 100, rotate: 180 },
  ]

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setRotate(blocks[currentIndex].rotate)
    setFill(blocks[currentIndex].height)
  }
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.innerContainer}>
          <h2 className={stls.title}>Шаги практики</h2>
          <div className={stls.blocks}>
            <Swiper
              // direction={'vertical'}
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={{
                releaseOnEdges: true
              }}
              speed={600}
              effect={'fade'}
              fadeEffect={{
                crossFade: true
              }}
              onSlideChange={handleSlideChange}
              className={stls.mySwiper}
              style={{ height: '20vh' }}
              >
              {blocks.map((el) => 
                <SwiperSlide 
                  key={`${el.id}+${el.rotate}`}
                  className={stls.slide}
                >
                  <StepBlocks fill={el.height} id={el.id}/>
                </SwiperSlide>
              )}
            </Swiper>
            <CubicBlockThreeSide rotate={rotate}/>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
