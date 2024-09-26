import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalProgramDescription.module.sass'
import {
  DescriptionCardItem,
  ProgramDescription
} from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import IconVioletCircle from '../icons/IconVioletCircle'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import { useState } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import PracticalNextButton from '../general/PracticalNextButton'
import PracticalPrevButton from '../general/PracticalPrevButton'
import TagOrange from '../general/TagOrange'
import { IconFinger } from '../icons'
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay])

type Props = {
  cards: DescriptionCardItem[]
  description: ProgramDescription
}

const PracticalProgramDescription = ({ cards, description }: Props) => {

  return (
    <section className={stls.container}>
      <Wrapper>
          <h2 className={stls.title}>Описание программы</h2>
        <TwoColumnsPractical>
          <ul className={stls.listColumn}>
            {cards.map(el => (
              <li className={stls.item} key={el.title}>
                <div className={stls.icon}>
                  <IconVioletCircle />
                </div>
                <div className={stls.itemText}>
                  <span className={classNames(stls.text, stls.bold)}>
                    {el.title}
                  </span>{' '}
                  <span className={stls.text}>{el.subtitle}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className={stls.image}>
            <Image
            className={stls.imageClass}
              src={cards[0]?.picture?.url}
              alt='Лекция'
              width={1000}
              height={750}
              // layout='responsive'
            />
          </div>
        </TwoColumnsPractical>
      </Wrapper>
      <div className={stls.stripe}>
        <h3 className={stls.stripeText}>{description.subtitle}</h3>
      </div>
    </section>
  )
}

export default PracticalProgramDescription
