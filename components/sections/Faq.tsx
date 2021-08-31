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
        <div className={stls.heading}>
          {' '}
          <h2 className={stls.title}>Часто задаваемые вопросы</h2>
          <div className={stls.laptopdesktop}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам в течение
              5 минут!
            </p>
            <BtnZeta text={'Задать вопрос'} />
          </div>
        </div>

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
          <div className={stls.phonetablet}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам в течение
              5 минут!
            </p>
          </div>
        </div>
        <div className={stls.phonetablet}>
          <BtnZeta text={'Задать вопрос'} />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
