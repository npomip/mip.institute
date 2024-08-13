import stls from '@/styles/components/sections/Faq.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import FaqAnswer from '@/components/general/FaqAnswer'
import PopupTrigger from '@/components/general/PopupTrigger'

const GeneralFaq = ({qnas}) => {

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
            {qnas &&
              qnas.map(({ question, answer }, idx) => (
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

export default GeneralFaq
