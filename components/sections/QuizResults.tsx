import stls from '@/styles/components/sections/QuizResults.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/components/general/PopupTrigger'

const QuizResults = ({result}) => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.result}>
          <h3>{result}</h3>
        </div>
      </Wrapper>
    </section>
  )
}

export default QuizResults