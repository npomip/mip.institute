import stls from '@/styles/components/sections/lectorium/LectoriumFAQ.module.sass'
import { Faq } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Wrapper from '@/ui/Wrapper'
import ExpandableFAQ from '@/ui/ExpandableFAQ'

type Props = {
  faq: Faq[]
}

const LectoriumFAQ = ({ faq }: Props) => {
  return (
    <section>
      <Wrapper>
        <div className={stls.container}>
          <div className={stls.header}>
            <h2 className={stls.title}>
              Часто задаваемые
              <span className={stls.colouredTitle}> вопросы</span>
            </h2>
            <p className={stls.contact}>
              Вопросы по участию вы можете задать нашему администратору&nbsp;
              <span className={stls.bold}>
                по телефону: 8&nbsp;(999) 888-88-88 (WhatsApp)
              </span>
            </p>
          </div>
          {faq?.map((qna, idx) => (
            <ExpandableFAQ
              key={qna.question}
              number={idx + 1}
              question={qna.question}
              answer={qna.answer}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default LectoriumFAQ
