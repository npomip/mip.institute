import TwoBlocks from '@/ui/TwoBlocks'
import stls from './HaveQuestions.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'
import { CldImage } from 'next-cloudinary'

const HaveQuestions = () => {
  return (
    <section>
      <Wrapper>
        <TwoBlocks>
          <CldImage
            src='lectorium_have_Questions_658f74e67a'
            alt='Вопросы?'
            className={stls.img}
            style={{ width: '100%', height: 'auto' }}
            width='580'
            height='360'
            crop='fit'
          />

          <div className={stls.text}>
            <h2 className={stls.title}>у вас остались вопросы?</h2>
            <p className={stls.description}>
              Оставьте свои контакты,
              <br />
              наш администратор с вами
              <span className={stls.bold}> свяжется </span>и
              <span className={stls.bold}> проконсультирует</span>
            </p>
            <div className={stls.btn}>
              <PopupTrigger btn='alpha' cta='askQuestion' />
            </div>
          </div>
        </TwoBlocks>
      </Wrapper>
    </section>
  )
}

export default HaveQuestions
