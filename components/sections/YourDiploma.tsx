import stls from '@/styles/components/sections/YourDiploma.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import { BtnAlpha } from '@/components/btns'
import { ImgDiploma1 } from '@/components/imgs'

const YourDiploma = () => {
  const diplomaSlides = [
    <ImgDiploma1 key={'diploma-1'} />,
    <ImgDiploma1 key={'diploma-2'} />,
    <ImgDiploma1 key={'diploma-3'} />
  ]

  const mobileSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 10
  }
  const tabletSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 30
  }
  const laptopSwiperOptions = tabletSwiperOptions
  const desktopSwiperOptions = tabletSwiperOptions

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.content}>
          <div>
            <h2 className={stls.title}>Ваши будущие дипломы</h2>
            <div className={stls.subtitleContainer}>
              <p className={stls.subtitle}>
                Все наши программы лицензированы Департаментом образования
                города Москвы, поэтому дипломы ценится как клиентами, так и
                профессиональным сообществом!
              </p>

              <div className={stls.desktopBtnContainer}>
                <BtnAlpha text={'Узнать об институте'} />
              </div>
            </div>
          </div>
          <div className={stls.swiper}>
            <SwiperContainer
              diplomas
              slides={diplomaSlides}
              mobileOptions={mobileSwiperOptions}
              tabletOptions={tabletSwiperOptions}
              laptopOptions={laptopSwiperOptions}
              desktopOptions={desktopSwiperOptions}
            />
          </div>
          <div className={stls.mobileBtnContainer}>
            <BtnAlpha text={'Узнать об институте'} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourDiploma
