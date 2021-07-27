import stls from '@/styles/components/sections/Hero.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import { IconAtom } from '@/components/icons'
import { ImgLadyStudying } from '@/components/imgs'
import { BtnAlpha, BtnBeta, BtnGamma, BtnDelta } from '@/components/btns'

const Hero = () => {
  let hiddenGemCount = 0
  const hiddenGem = e => {
    if (hiddenGemCount < 7) {
      hiddenGemCount++
    } else {
      const el = e.currentTarget
      setTimeout(() => {
        el.classList.remove(stls.hiddenGem)
        hiddenGemCount = 0
      }, 6000)
      el.classList.add(stls.hiddenGem)
    }
  }
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.icon} onClick={e => hiddenGem(e)}>
          <IconAtom />
        </div>
        <div className={stls.iconDesktop} onClick={e => hiddenGem(e)}>
          <IconAtom light large />
        </div>
        <TwoColumns>
          <div>
            <h1 className={stls.title}>Онлайн-институт психологии</h1>
            <h2 className={stls.desc}>
              Освойте востребованную профессию психолога или повысьте
              квалификацию вместе с нами
            </h2>
            <div className={stls.btns}>
              <BtnAlpha text='Записаться на курс' />
              <BtnBeta text='Задать вопрос' />
              <BtnGamma text='Подробнее' />
              <BtnDelta text='Смотреть все курсы' />
            </div>
          </div>
          <ImgLadyStudying />
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Hero
