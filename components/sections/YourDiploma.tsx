import stls from '@/styles/components/sections/YourDiploma.module.sass'
import { RefObject, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routes } from '@/config/index'
import { getImageHeight } from '@/helpers/index'
import { ContextStaticProps } from '@/context/index'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupImage } from '@/components/popups'
import { BtnAlpha, BtnIota } from '@/components/btns'
import {
  ImgDiplomaDynamic,
  ImgCertificate,
  ImgCertificateAlt,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement
} from '@/components/imgs'
import ImgLicence from '@/components/imgs/legal/ImgLicence'
import IconLoupe from '../icons/IconLoupe'
import License from '../imgs/legal/License'
import IconRusLicense from '../icons/IconRusLicense'
import { IconAtom } from '../icons'
import LicensePopUp from './LicensePopUp'

type YourDiplomaType = {
  ofType: 'course' | 'profession'
  diplomaRef: RefObject<HTMLElement>
}

const YourDiploma = ({ ofType = null, diplomaRef }: YourDiplomaType) => {
  const slides = []

  const { program } = useContext(ContextStaticProps)

  ofType === 'profession' &&
    slides.push(
      <div className={stls.diploma}>
        {program?.diploma2 ? (
          <ImgDiplomaDynamic
            key='diploma-alt'
            src={program?.diploma2?.url}
            width={program?.diploma2?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma2?.width,
              heightInitial: program?.diploma2?.height
            })}
            diplomaAlt
          />
        ) : (
          <ImgDiplomaAlt key='diploma-alt' />
        )}
      </div>,
      <div className={stls.diploma}>
        {program?.diploma1 ? (
          <ImgDiplomaDynamic
            key='diploma'
            src={program?.diploma1?.url}
            width={program?.diploma1?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma1?.width,
              heightInitial: program?.diploma1?.height
            })}
          />
        ) : (
          <ImgDiploma key='diploma' />
        )}
      </div>,

      <div className={cn(stls.diploma, stls.supplement)}>
        <ImgSupplement key='supplement' />
      </div>
    )

  ofType === 'course' &&
    slides.push(
      <div className={stls.diploma}>
        {program?.diploma1 ? (
          <ImgDiplomaDynamic
            key='certificate'
            src={program?.diploma1?.url}
            width={program?.diploma1?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma1?.width,
              heightInitial: program?.diploma1?.height
            })}
            diplomaCertificate
          />
        ) : (
          <ImgCertificate key='certificate' />
        )}
      </div>,
      <div className={stls.diploma}>
        {program?.diploma2 ? (
          <ImgDiplomaDynamic
            key='certificate-alt'
            src={program?.diploma2?.url}
            width={program?.diploma2?.width && 700}
            height={getImageHeight({
              width: 700,
              widthInitial: program?.diploma2?.width,
              heightInitial: program?.diploma2?.height
            })}
            diplomaCertificateAlt
          />
        ) : (
          <ImgCertificateAlt key='certificate-alt' />
        )}
      </div>
    )

  const mobileSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 10
  }
  const tabletLaptopDesktopSwiperOptions = {
    slidesNum: 1,
    spaceBetween: 30
  }
  console.log(slides.map(el => el.props))

  return (
    <section ref={diplomaRef} className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваши будущие дипломы</h2>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.subtitleContainer}>
              <p className={stls.subtitle}>
                Все наши программы лицензированы Департаментом образования
                города Москвы, поэтому дипломы ценятся как клиентами, так и
                профессиональным сообществом!
              </p>
              {/* <div className={stls.cont}></div> */}
              <div className={stls.btn}>
                <LicensePopUp />
              </div>
            </div>
          </div>
          <div className={stls.slidesContainer}>
            {slides.map((slide, index) => (
              <Popup
                key={`popup-${index}`}
                trigger={<div className={stls.trigger}>{slide}</div>}
                modal
                nested>
                {close => (
                  <PopupImage image={slide.props.children} close={close} />
                )}
              </Popup>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
