import stls from '@/styles/components/sections/Faq.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { getListItemsInnerHtml, getParagraphInnerHtml } from '@/helpers/index'
import PopupTrigger from '@/components/general/PopupTrigger'
import parse from 'html-react-parser'
import { convertMdToHtml } from '@/helpers/index'
import marked from 'marked'

const Faq = () => {
  const { program } = useContext(ContextStaticProps)

  // const topics = getListItemsInnerHtml(questions)
  // const titles = getParagraphInnerHtml(questions)

  // const list =
  //   titles &&
  //   topics &&
  //   titles.map((title, idx) => ({
  //     question: title,
  //     answer: topics[idx]
  //   }))

  let list =
    program?.qnas?.length &&
    program.qnas.map((qna, idx) => ({
      question: qna.question,
      answer: marked(qna.answer)
    }))
    console.log(list)
    const listOnMain = [
      {question:'Можно ли закончить обучение экстерном?', answer: '<p>Да, вы сами решаете, в каком темпе обучаться, и можете сократить  срок обучение до двух раз</p>'},
      {question:'Можно ли поступить на базе аттестата?', answer: '<p>Да, поступить на программу можно не имея среднего или высшего профессионального образования. Программа будет предоставлена в полном объеме. По окончании обучения будет выдан только диплом установленного образца институтом в формате А4 для личного портфолио. После получения Вами среднего или высшего образования мы можем Вас переаттестовать и выдать диплом о профессиональной переподготовке. Также Вы можете параллельно пройти программу среднего профессионального образования в колледже-партнере всего за 1 год и получить сразу два диплома! Подробности можете узнать в приемной комиссии. </p>'},
      {question:'Возможно ли обучаться в рассрочку?', answer: '<p>Да, мы предоставляем беспроцентную рассрочку от института на 2, 3 месяца или через банки партнеры на 4, 6, 8, 12 месяцев. Количество месяцев Вы можете выбрать самостоятельно для комфортного платежа. </p>'},
      {question:'Что такое налоговый вычет за обучение и как его получить?', answer: '<p>Это своего рода кешбэк от государства, который можно получить, оплачивая определенный список услуг, в том числе и образование.Вернуть можно 15 600 рублей в год. Для получения налогового вычета нужно заполнить заявление на сайте nalog.ru. После получения уведомления от налоговой его нужно будет передать в бухгалтерию вашего работодателя.</p>'},
      {question:'Какие требования для зачисления на программу?', answer: '<p>Законченное высшее или среднее профессиональное образование</p>'},
      {question:'Какие документы я получу после окончания обучения?', answer: '<p>После успешного прохождения программы вы получаете Диплом о профессиональной переподготовке установленного образца. Это официальный документ, который вносится в реестр ФРДО и дает право на осуществление профессиональной деятельности в сфере психологии.</p><p>Диплом Московского института психологии в формате А4 для личного портфолио.</p><p>Международное приложение к диплому Supplement, форма которого была разработана Европейской комиссией, Советом Европы и ЮНЕСКО с целью взаимного признания странами национальных документов о высшем образовании в соответствии с принципами Болонской декларации «Европейская зона высшего образования»</p>'},
    ]

    if(!list) {
      list = listOnMain
    }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          {' '}
          <h2 className={stls.title}>Часто задаваемые вопросы</h2>
          <div className={stls.laptopdesktop}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! <br />И мы перезвоним Вам!
            </p>
            <div className={stls.btn}>
            <PopupTrigger btn='zeta' cta='askQuestion' />
            </div>
            
          </div>
        </div>

        <div className={stls.content}>
          <ul className={stls.list}>
            {list &&
              list.map(({ question, answer }, idx) => (
                <FaqAnswer
                  key={question + idx}
                  question={question}
                  answer={answer}
                />
              ))}
          </ul>
          <div className={stls.phonetablet}>
            <p className={stls.p}>
              У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
            </p>
          </div>
        </div>
        <div className={stls.phonetablet}>
          <PopupTrigger btn='zeta' cta='askQuestion' />
        </div>
      </Wrapper>
    </section>
  )
}

export default Faq
