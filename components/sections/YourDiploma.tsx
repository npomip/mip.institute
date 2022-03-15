import stls from '@/styles/components/sections/YourDiploma.module.sass'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import {
  ImgCertificate,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement
} from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupImage } from '@/components/popups'
import ImgLicence from '@/components/imgs/legal/ImgLicence'
import { BtnAlpha, BtnIota } from '@/components/btns'
import externalUrls from '@/config/externalUrls'

type YourDiplomaType = {
  ofType: 'course' | 'profession'
}

const YourDiploma = ({ ofType = null }: YourDiplomaType) => {
  const slides = []

  ofType === 'profession' &&
    slides.push(
      <div className={stls.diploma}>
        <ImgDiploma key='diploma' />
      </div>,
      <div className={stls.diploma}>
        <ImgDiplomaAlt key='diploma-alt' />,
      </div>,
      <div className={cn(stls.diploma, stls.supplement)}>
        <ImgSupplement key='supplement' />
      </div>
    )

  ofType === 'course' &&
    slides.push(
      <div className={stls.diploma}>
        <ImgCertificate key='certificate' />
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

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div className={stls.left}>
            <h2 className={stls.title}>Ваши будущие дипломы</h2>
            <div className={stls.subtitleContainer}>
              <p className={stls.subtitle}>
                Все наши программы лицензированы Департаментом образования
                города Москвы, поэтому дипломы ценится как клиентами, так и
                профессиональным сообществом!
              </p>

              <div className={stls.btn}>
                <BtnAlpha
                  text={
                    <>
                      Уведомление о предоставлении <br /> лицензии №041221{' '}
                    </>
                  }
                  href={externalUrls.license}
                  target='_blank'
                />
                {/* <Popup
                  trigger={
                    <BtnIota
                      text={
                        <>
                          Уведомление о предоставлении <br /> лицензии{' '}
                          <span className={stls.highlight}>№041221</span>{' '}
                        </>
                      }
                      href={externalUrls.license}
                      target='_blank'
                    />
                  }
                  modal
                  nested>
                  {close => <PopupImage image={<ImgLicence />} close={close} />}
                </Popup> */}
              </div>
            </div>
          </div>
          <div className={stls.swiper}>
            <SwiperContainer
              diplomas
              slides={slides}
              mobileOptions={mobileSwiperOptions}
              tabletOptions={tabletLaptopDesktopSwiperOptions}
              laptopOptions={tabletLaptopDesktopSwiperOptions}
              desktopOptions={tabletLaptopDesktopSwiperOptions}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
