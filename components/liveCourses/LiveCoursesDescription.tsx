import stls from 'styles/components/liveCourses/LiveCoursesDescription.module.sass'
import Wrapper from '../layout/Wrapper'

const topics = [
  'Тема 1. Что такое обида и для чего она нужна?',
  'Тема 2. Причины возникновения и последствия обиды.',
  'Тема 3. Различные роли и позиции в отношениях, и как это связано с обидой.',
  'Тема 4. Влияние обиды на здоровье.',
  'Тема 5. Работа с обидой: принять, простить и отпустить. Рассматриваем техники из различных направлений психологии.',
  'Тема 6. Заключение. Жизнь, свободная от обид - миф или реальность?'
]

const LiveCoursesDescription = ({ title }) => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <div className={stls.title}>{title}</div>
        <div className={stls.description}>
          {topics.map(el => (
            <div className={stls.item} key={el}>
              {el}
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default LiveCoursesDescription
