import React from 'react'
import stls from '@/styles/components/practicalTraining/PracticalSteps.module.sass'
import { TermPoint } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import Wrapper from '../layout/Wrapper'
import SwiperCore, { Mousewheel, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'

SwiperCore.use([Mousewheel, EffectFade])

type Props = {
  points: TermPoint[]
}

const PracticalSteps = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <Swiper
          direction={'vertical'}
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
          style={{ height: '20vh' }}>
          <SwiperSlide>
            <h1>Шаг 1</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Шаг 2</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Шаг 3</h1>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </section>
  )
}

export default PracticalSteps
