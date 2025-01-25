import stls from './Benefits.module.sass'
import Wrapper from '@/ui/Wrapper'

const text = [
  {
    title: '15 лет',
    description: 'на рынке образования'
  },
  {
    title: 'Команда роста',
    description:
      'Вместе с вами мы хотим вдохновлять новое поколение профессионалов. Наша команда — это место, где знания встречаются с практикой, а студенты — с будущими перспективами'
  },
  {
    title: '3000 студентов',
    description: 'на одном из самых востребованных направлений «Психолог-консультант»'
  },
  {
    title: '70+',
    description:
      'преподавателей с опытом практики от 5 лет, прошедших тщательный отбор и имеющих кандидатские \n' +
      'и докторские степени'
  },
  {
    title: '160 000 мин.',
    description: 'видео-лекций студийного качества'
  },
  {
    title: '8000+',
    description: 'выпускников'
  }
]

const Benefits = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Преимущества</h2>
        <div className={stls.cards}>
          {text.map(({ title, description }, index) => (
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
