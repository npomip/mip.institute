import stls from './GroupSupervisionFAQ.module.sass'
import ExpandableFAQ from '@/ui/ExpandableFAQ'

const questions = [
  {
    question: 'Какие требования для участия в программе?',
    answer: 'Самые высокие'
  }
]
const GroupSupervisionFAQ = () => {
  return (
    <section>
      <h2 className={stls.title}>
        Часто задаваемые
        <span className={stls.coloredTitle}> вопросы</span>
      </h2>
      <ul className={stls.list}>
        {questions.map((qna, idx) => (
          <ExpandableFAQ
            key={qna.question}
            number={idx + 1}
            question={qna.question}
            answer={qna.answer}
          />
        ))}
      </ul>
    </section>
  )
}

export default GroupSupervisionFAQ
