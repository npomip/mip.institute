import stls from '@/styles/components/sections/FourSteps.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ThreeNumber from '../icons/ThreeNumber'
import FourNumber from '../icons/FourNumber'
import TwoNumber from '../icons/TwoNumber'
import { IconCircleCheck, OneNumber } from '../icons'
import BachelorStepCard from '../cards/BachelorStepCard'
import IconCheck from '../icons/IconCheck'

const FourSteps = () => {
  const steps = [
    {
      id: 1,
      icon: <OneNumber />,
      title: 'Оставь заявку',
      subtitle:
        'Менеджер Приемной комиссии свяжется с Вами, уточнит все детали поступления и поможет оформить документы'
    },
    {
      id: 2,
      icon: <TwoNumber />,
      title: 'Подтверди результаты ЕГЭ или пройди вступительные испытания',
      subtitle:
        'Все вступительные испытания проводятся дистанционно на нашей платформе, приезжать в Институт не потребуется'
    },
    {
      id: 3,
      icon: <ThreeNumber />,
      title: 'Заключи договор ',
      subtitle:
        'Заключи договор на оказание платных образовательных услуг и оплати обучение'
    },
    {
      id: 4,
      icon: <FourNumber />,
      title: 'Поздравляем!',
      subtitle:
        'Теперь ты студент Московского института психологии! Знакомься с куратором'
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Что нужно для поступления? <span>4 легких шага в поступлении:</span>
        </h2>
        <div className={stls.cardDotTop}></div>
        <div className={stls.cards}>
          {steps.map(card => (
            <BachelorStepCard key={card.id} card={card} />
          ))}
        </div>
        <div className={stls.cardDotBottom}></div>
        <div className={stls.bottomContent}>
          <div className={stls.text}>
            <p>
              <span>Для поступления</span> <br className={stls.descOnly} />{' '}
              потребуется минимум документов:
            </p>
          </div>
          <div className={stls.docs}>
            <div className={stls.iconPlusDoc}>
              <IconCircleCheck violetItems />
              <p>Паспорт</p>
            </div>
            <div className={stls.iconPlusDoc}>
              <IconCircleCheck violetItems />
              <p>Диплом/аттестат</p>
            </div>
            <div className={stls.iconPlusDoc}>
              <IconCircleCheck violetItems />
              <p>Заявление на поступление</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FourSteps
