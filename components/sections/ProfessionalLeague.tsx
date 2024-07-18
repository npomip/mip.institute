import pic from '@/public/assets/imgs/general/opplHiddenBlock.png'
import img from '@/public/assets/imgs/general/pplWave.png'
import imgMob from '@/public/assets/imgs/general/pplWaveMobile.png'
import stls from '@/styles/components/sections/ProfessionalLeague.module.sass'
import leagueList from 'constants/professionalLeague'
import Image from 'next/image'
import { useState } from 'react'
import ExpandableItemCross from '../general/ExpandableItemCross'
import TagOrange from '../general/TagOrange'
import ImgPPLLogo from '../imgs/general/ImgPPLLogo'
import Wrapper from '../layout/Wrapper'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

const ProfessionalLeague = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobileLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <div className={stls.section}>
      <Wrapper>
        <div className={stls.block}>
          <div className={stls.wave}>
            <Image src={img} alt='Волна' />
          </div>
          <div className={stls.waveMobile}>
            <Image src={imgMob} alt='Волна' />
          </div>
          <span className={stls.filter}></span>
          <div className={stls.tag}>
            <TagOrange>ОППЛ</TagOrange>
          </div>
          <div className={stls.header}>
            <span className={stls.title}>
              Московский институт психологии – партнер ОППЛ
              {isMobileLayout && <br />}
              (Общероссийской профессиональной психотерапевтической лиги)
            </span>
            <div className={stls.logo}>
              <ImgPPLLogo />
            </div>
          </div>
          <div className={stls.description}>
            Членство в Лиге – это высокая оценка качества наших образовательных
            услуг и дополнительные преимущества для учеников МИП.
            {isMobileLayout && (
              <>
                <br /> <br />
              </>
            )}
            Партнерство с ОППЛ позволит нашим выпускникам стать членами в
            крупнейшем профессиональном сообществе психологов России.
          </div>
          <button
            className={stls.readMore}
            onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Свернуть' : 'Читать подробнее'}
          </button>
          {isVisible && (
            <div className={stls.hiddenBlock}>
              <span className={stls.hiddenTitle}>
                Преимущества наблюдательного участия в ОППЛ:
              </span>
              <div className={stls.content}>
                <div>
                  <Image
                    height={614}
                    width={460}
                    src={pic}
                    alt='Краткосрочная психотерапия'
                    className={stls.image}
                  />
                </div>
                <ul className={stls.list}>
                  {leagueList.map((el, i) => (
                    <ExpandableItemCross
                      title={el.title}
                      key={el.title}
                      content={el.content}
                      isOpened={i === 0}
                    />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  )
}

export default ProfessionalLeague
