import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/practicalTraining/PracticalProgramDescription.module.sass'
import {
  DescriptionCardItem,
  ProgramDescription
} from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import Image from 'next/image'
import SwiperCore from 'swiper'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import IconVioletCircle from '@/components/icons/IconVioletCircle'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical'
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
              style={{ width: '100%', height: 'auto' }}
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
