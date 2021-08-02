import stls from '@/styles/components/sections/Faq.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnZeta } from '@/components/btns'
import FaqAnswer from '@/components/general/FaqAnswer'

const Faq = () => {
  const list = [
    {
      question: 'Как проходит обучение в группах?',
      answer: 'Ответ'
    },
    {
      question: 'Какой график обучения? Получится  ли совмещать его с работой?',
      answer: 'Ответ'
    },
    {
      question: 'Специальная психология и дефектология',
      answer: 'Ответ'
    },
    {
      question: 'Как проходит обучение в группах?',
      answer: 'Ответ'
    },
    {
      question: 'Специальная психология и дефектология',
      answer: 'Ответ'
    }
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Часто задаваемые вопросы</h2>
        <div className={stls.content}>
          <ul className={stls.list}>
            {list.map(({ question, answer }, idx) => (
              <FaqAnswer
                key={question + idx}
                question={question}
                answer={answer}
              />
            ))}
          </ul>
          <p className={stls.p}>
            У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам в течение 5
            минут!
          </p>
        </div>
        <BtnZeta text={'Задать вопрос'} />
      </Wrapper>
    </section>
  )
}

export default Faq
