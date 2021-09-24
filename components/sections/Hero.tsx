import stls from '@/styles/components/sections/Hero.module.sass'
import 'reactjs-popup/dist/index.css'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import ProsList from '@/components/general/ProsList'
import { IconAtom } from '@/components/icons'
import { ImgLadyStudying } from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'

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
        <TwoColumns>
          <div className={stls.left}>
            <h1 className={stls.title}>Онлайн-институт психологии</h1>
            <h2 className={stls.desc}>
              Освойте востребованную профессию психолога или повысьте
              квалификацию вместе с нами
            </h2>
            <div className={stls.btns}>
              <div className={stls.btn}>
                <PopupTrigger btnAlpha ctaAlpha />
              </div>
              <div className={stls.btn}>
                <PopupTrigger btnBeta question />
              </div>
            </div>
          </div>
          <div className={stls.right}>
            <div className={stls.iconDesktop} onClick={e => hiddenGem(e)}>
              <IconAtom large cnu slightlyVisible />
            </div>
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
