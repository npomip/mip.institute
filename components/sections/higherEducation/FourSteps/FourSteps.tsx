import Wrapper from '@/ui/Wrapper'
import stls from './FourSteps.module.sass'
import BachelorStepCard from './BachelorStepCard/BachelorStepCard'
import fourSteps from 'constants/higherEducation/fourSteps'
import loadIcon from '@/helpers/general/loadIcon'

const FourSteps = ({ stepsForEnterRef }) => {
  return (
    <section ref={stepsForEnterRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Что нужно для поступления? <span>4 легких шага в поступлении:</span>
        </h2>
        <div className={stls.cardDotTop}></div>
        <div className={stls.cards}>
          {fourSteps.map(card => (
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
              {loadIcon('IconCircleCheck', { violetRound: true })}
              <p>Паспорт</p>
            </div>
            <div className={stls.iconPlusDoc}>
              {loadIcon('IconCircleCheck', { violetRound: true })}
              <p>Диплом/аттестат</p>
            </div>
            <div className={stls.iconPlusDoc}>
              {loadIcon('IconCircleCheck', { violetRound: true })}
              <p>Заявление на поступление</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FourSteps
