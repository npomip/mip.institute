import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalListCarousel.module.sass'
import { PracticalListItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { useRef } from 'react'
import SwiperContainer from '../general/SwiperContainer'
import { IconFinger } from '../icons'
import PracticalListCarouselCard from './PracticalListCarouselCard'

type Props = {
  list: PracticalListItem[]
}

const PracticalList = ({ list }: Props) => {
  const slides = list.map((item, idx) => (
    <PracticalListCarouselCard
      key={item.text + idx}
      card={item}
      number={idx + 1}
    />
  ))

  const desktopSwiperOptions = {
    slidesNum: 4.7,
    spaceBetween: 25
  }

  const laptopSwiperOptions = {
    slidesNum: 3.5,
    spaceBetween: 25
  }

  const tabletSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 25
  }

  const mobileSwiperOptions = {
    slidesNum: 1.5,
    spaceBetween: 30
  }

  const fingerRef = useRef(null)

  return (
    <section ref={fingerRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Зачем
          <span className={stls.colouredTitle}> нужна практика </span>
          будущему психологу во время обучения?
        </h2>
        <SwiperContainer
          slides={slides}
          mobileOptions={mobileSwiperOptions}
          tabletOptions={tabletSwiperOptions}
          laptopOptions={laptopSwiperOptions}
          desktopOptions={desktopSwiperOptions}
          hideNavigation
        />
        <div className={stls.finger}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default PracticalList
