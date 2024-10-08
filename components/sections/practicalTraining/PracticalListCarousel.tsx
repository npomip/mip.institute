import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/practicalTraining/PracticalListCarousel.module.sass'
import { PracticalListItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { useRef } from 'react'
import SwiperContainer from '@/ui/SwiperContainer'
import { IconFinger } from '@/components/icons'
import PracticalListCarouselCard from './PracticalListCarouselCard'

type Props = {
  list: PracticalListItem[]
}

const PracticalList = ({ list }: Props) => {
  const slides = list.map((item, idx) => (
    <PracticalListCarouselCard
      key={item.text + idx}
      title={item.title}
      text={item.text}
      number={idx + 1}
      margin={20}
    />
  ))

  const swiperOptions = {
    mobile: {
      slidesNum: 1.5,
      spaceBetween: 30
    },
    tablet: {
      slidesNum: 2,
      spaceBetween: 25
    },
    laptop: {
      slidesNum: 3.5,
      spaceBetween: 25
    },
    desktop: {
      slidesNum: 4.7,
      spaceBetween: 25
    }
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
          mobileOptions={swiperOptions.mobile}
          tabletOptions={swiperOptions.tablet}
          laptopOptions={swiperOptions.laptop}
          desktopOptions={swiperOptions.desktop}
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
