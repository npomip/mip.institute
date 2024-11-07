import TwoBlocks from '@/ui/TwoBlocks'
import Image from 'next/image'
import React from 'react'
import stls from '@/styles/components/sections/lectorium/HaveQuestions.module.sass'
import pic from '@/public/assets/imgs/lectorium/haveQuestions.png'
import PopupTrigger from '@/ui/PopupTrigger'
import Wrapper from '@/ui/Wrapper'

const HaveQuestions = () => {
  return (
    <section>
      <Wrapper>
        <TwoBlocks>
          <Image
            src={pic}
            alt='HaveQuestions'
            className={stls.img}
            style={{ width: '100%', height: '100%' }}
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
