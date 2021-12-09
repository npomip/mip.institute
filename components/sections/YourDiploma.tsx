import stls from '@/styles/components/sections/YourDiploma.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import {
  ImgCertificate,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement
} from '@/components/imgs'
import PopupTrigger from '@/components/general/PopupTrigger'

type YourDiplomaType = {
  ofType: 'course' | 'profession'
}

const YourDiploma = ({ ofType = null }: YourDiplomaType) => {
  const slides = []

  ofType === 'profession' &&
    slides.push(
      <ImgDiploma key='diploma' />
      // <ImgDiplomaAlt key='diploma-alt' />
      // <ImgSupplement key='supplement' />
    )

  ofType === 'course' && slides.push(<ImgCertificate key='certificate' />)

  const mobileSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 10
  }
  const tabletLaptopDesktopSwiperOptions = {
    slidesNum: 3,
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

              <div className={stls.desktopBtnContainer}>
                <PopupTrigger btn='alpha' cta='learnAboutUs' />
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
          <div className={stls.mobileBtnContainer}>
            <PopupTrigger btn='alpha' cta='learnAboutUs' />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
