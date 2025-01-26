import stls from './Benefits.module.sass'
import Wrapper from '@/ui/Wrapper'
import benefits from 'constants/vacancies/benefits'

const Benefits = ({props}) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преимущества</h2>
        <div className={stls.cards}>
          {benefits.map(({ title, description }, index) => (
            <div key={title + index} className={stls.card}>
              <span className={stls.cardTitle}>{title}</span>
              <span className={stls.cardDescription}>{description}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Benefits
