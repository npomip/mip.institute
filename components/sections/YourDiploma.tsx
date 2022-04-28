import stls from '@/styles/components/sections/YourDiploma.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routes } from '@/config/index'
import { getImageHeight } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import PopupTrigger from '@/components/general/PopupTrigger'
import { PopupImage } from '@/components/popups'
import { BtnAlpha, BtnIota } from '@/components/btns'
import {
  ImgDiplomaDynamic,
  ImgCertificate,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement
} from '@/components/imgs'
import ImgLicence from '@/components/imgs/legal/ImgLicence'

type YourDiplomaType = {
  ofType: 'course' | 'profession'
}

const YourDiploma = ({ ofType = null }: YourDiplomaType) => {
  const slides = []

  const { program } = useContext(ProgramContext)
  console.log(program)

  ofType === 'profession' &&
    slides.push(
      <div className={stls.diploma}>
        {program.diploma1 ? (
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
                <Popup
                  trigger={open => (
                    <div>
                      <BtnAlpha
                        text={
                          <>
                            Уведомление о предоставлении <br /> лицензии №041221{' '}
                          </>
                        }
                      />
                    </div>
                  )}
                  modal
                  lockScroll
                  nested
                  closeOnDocumentClick>
                  {close => <PopupImage image={<ImgLicence />} close={close} />}
                </Popup>
                {/* <Popup
                  trigger={
                    <BtnIota
                      text={
                        <>
                          Уведомление о предоставлении <br /> лицензии{' '}
                          <span className={stls.highlight}>№041221</span>{' '}
                        </>
                      }
                      href={routes.external.license}
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
