import IconArrowRightLong from '@/components/icons/IconArrowRightLong'
import stls from '@/styles/components/sections/lectorium/LectoriumFAQ.module.sass'
import { Faq } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import ExpandableItemCross from '@/ui/ExpandableItemCross'
import Wrapper from '@/ui/Wrapper'

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
            <ExpandableItemCross
              key={qna.question}
              title={
                <p className={stls.question}>
                  <span className={stls.questionNumber}>(00{idx + 1})</span>
                  <span className={stls.questionText}>{qna.question}</span>
                </p>
              }
              content={
                <div className={stls.content}>
                  <IconArrowRightLong />
                  <p className={stls.textContent}>{qna.answer}</p>
                </div>
              }
              classNameIcon={stls.iconProps}
              classNameContainer={stls.itemProps}
              classNameHeader={stls.reversedHeaderProps}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default LectoriumFAQ
