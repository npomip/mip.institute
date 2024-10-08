import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalWhatYouWillLearn.module.sass'
import {
  WhatYouWillLearn,
  WhatYouWillLearnPhoto
} from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { useRef } from 'react'
import SwiperContainer from '@/ui/SwiperContainer'
import { IconFinger } from '../icons'
import PracticalListCarouselCard from './PracticalListCarouselCard'

type Props = {
  listLearn: WhatYouWillLearn
  photo: WhatYouWillLearnPhoto
}

const PracticalWhatYouWillLearn = ({ listLearn, photo }: Props) => {
  const slides = listLearn.list.map(({ text }, idx) => {
    const getCardTitle = (itemText: string, index: number): string => {
      const textParts = itemText.split(' ')
      return index === 6 ? textParts.slice(0, 2).join(' ') : textParts[0]
    }

    const getListItemText = (itemText: string, itemIndex: number): string => {
      const textParts = itemText.split(' ')
      return itemIndex === 6
        ? textParts.slice(2).join(' ')
        : textParts.slice(1).join(' ')
    }

    return (
      <PracticalListCarouselCard
        key={text}
        title={getCardTitle(text, idx)}
        text={getListItemText(text, idx)}
        number={idx + 1}
        markedTitle
      />
    )
  })

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
          Чему вы
          <span className={stls.colouredTitle}> научитесь </span>
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

export default PracticalWhatYouWillLearn
