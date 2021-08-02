import stls from '@/styles/components/sections/Hero.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import ProsList from '@/components/general/ProsList'
import { IconAtom } from '@/components/icons'
import { ImgLadyStudying } from '@/components/imgs'
import { BtnAlpha, BtnBeta } from '@/components/btns'

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
      <div className={stls.bg}></div>
      <Wrapper>
        <div className={stls.icon} onClick={e => hiddenGem(e)}>
          <IconAtom regular crho />
        </div>
        <div className={stls.iconDesktop} onClick={e => hiddenGem(e)}>
          <IconAtom large cnu slightlyVisible />
        </div>
        <TwoColumns>
          <div className={stls.left}>
            <h1 className={stls.title}>Онлайн-институт психологии</h1>
            <h2 className={stls.desc}>
              Освойте востребованную профессию психолога или повысьте
              квалификацию вместе с нами
            </h2>
            <div className={stls.btns}>
              <div className={stls.btn}>
                <BtnAlpha text='Записаться на курс' />
              </div>
              <div className={stls.btn}>
                <BtnBeta text='Задать вопрос' />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <div className={stls.img}>
              <ImgLadyStudying />
            </div>
            <div className={stls.prosList}>
              <ProsList />
            </div>
          </div>
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Hero
