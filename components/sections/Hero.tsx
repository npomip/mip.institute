import stls from '@/styles/components/sections/Hero.module.sass'
import 'reactjs-popup/dist/index.css'
import Wrapper from '@/ui/Wrapper'
import TwoColumns from '@/ui/TwoColumns'
import ProsList from '@/components/sections/ProsList'
import PopupTrigger from '@/ui/PopupTrigger'
import IconGratefullPortal from '../icons/IconGratefullPortal'
import IconHero from '../icons/IconHero'
import IconHeroWave from '../icons/IconHeroWave'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isTwoButtons, setIsTwoButtons] = useState('2buttons')


  useEffect(() => {
    const storedValue = localStorage.getItem('AB')
    setIsTwoButtons(storedValue)
  }, [])

  console.log(isTwoButtons);
  
  return (
    <section className={stls.container}>
      <div className={stls.bg}></div>
      <Wrapper>
        <div className={stls.leftbg}></div>
        <div className={stls.content}>
          <TwoColumns>
            <div className={stls.left}>
              <h1 className={stls.title}>Московский институт психологии</h1>
              <p className={stls.desc}>
                Поможем освоить профессию психолога и прокачать навыки
                действующим специалистам! <br />
                Высшее образование, курсы профессиональной переподготовки и
                повышения квалификации
              </p>
              <div className={stls.btns}>
                <div className={stls.btn}>
                  <PopupTrigger btn='alpha' cta='signUpForProgramm' />
                </div>
                <div className={stls.btn}>
                  {isTwoButtons === '2buttons' && <PopupTrigger btn='beta' cta='askQuestion' />}
                  
                </div>
              </div>
            </div>
            <div className={stls.right}>
              <div className={stls.img}>
                <IconHero />
              </div>
              <div className={stls.portals}>
                <div className={stls.smallOne}>
                  <IconGratefullPortal thirtyPx />
                </div>
                <div className={stls.pointShadow}></div>
                <div className={stls.smallTwo}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.xsmallOne}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.xsmallTwo}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.medium}>
                  <IconGratefullPortal xsmall />
                </div>
                <div className={stls.mediumMobile}>
                  <IconGratefullPortal medium />
                </div>
                <div className={stls.big}>
                  <IconGratefullPortal medium />
                </div>
                <div className={stls.tenPx}>
                  <IconGratefullPortal tenPx />
                </div>
                <div className={stls.tenPxTwo}>
                  <IconGratefullPortal tenPx />
                </div>
                <div className={stls.thirtyPx}>
                  <IconGratefullPortal thirtyPx />
                </div>
              </div>
              <div className={stls.mobileBtns}>
                <div className={stls.mobileBtn}>
                  <PopupTrigger btn='alpha' cta='signUpForCourse' />
                </div>
                <div className={stls.mobileBtn}>
                {isTwoButtons === '2buttons' && <PopupTrigger btn='beta' cta='askQuestion' />}
                  
                </div>
              </div>
            </div>

            <div className={stls.iconWave}>
              <IconHeroWave />
            </div>
          </TwoColumns>
          <div className={stls.prosList}>
            <ProsList />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Hero
