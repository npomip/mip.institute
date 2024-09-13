import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/practicalTraining/PracticalProgramDescription.module.sass'
import {
  DescriptionCardItem,
  ProgramDescription
} from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import Image from 'next/image'
import IconVioletCircle from '../icons/IconVioletCircle'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'

type Props = {
  cards: DescriptionCardItem[]
  description: ProgramDescription
}

const PracticalProgramDescription = ({ cards, description }: Props) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.titleContainer}>
          <h2 className={stls.title}>Описание программы</h2>
          <p className={stls.remark}>
            *Эта программа является{' '}
            <span className={stls.underlined}>
              первой образовательной
              <br /> ступенью
            </span>{' '}
            практической отработки навыков <br /> психологического
            консультирования.
          </p>
        </div>
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
              src={cards[0]?.picture?.url}
              alt='Лекция'
              width={1000}
              height={755}
              layout='responsive'
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
