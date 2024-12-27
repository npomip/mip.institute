import stls from './GroupSupervisionDesc.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import background from '@/public/assets/imgs/groupSupervision/Desc/descBackground.png'
import { CldImage } from 'next-cloudinary'

SwiperCore.use([Scrollbar])

const GroupSupervisionDesc = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isLaptopLayout = useBetterMediaQuery('(max-width: 1200px)')

  const imageContainer1 = [
    'supervision_desc1_e50211e024',
    'supervision_desc2_b9be39a2dc',
    'supervision_desc3_90873f332e'
  ]
  const imageContainer2 = [
    'supervision_desc4_0acef24b26',
    'supervision_desc5_fbaa3bd1d2'
  ]
  const imageContainerMob = [...imageContainer1, ...imageContainer2]

  return (
    <section
      className={stls.container}
      style={{
        backgroundImage: `url(${background.src})`,
        objectFit: 'cover',
        backgroundSize: `${isMobileAndTabletLayout ? '1000px' : '1500px'}`,
        backgroundPosition: `${isMobileAndTabletLayout ? 'center' : '-163px -250px'}`
      }}>
      <div className={stls.textBlock}>
        <h2 className={stls.title}>Групповая супервизия</h2>
        <p className={stls.text}>
          <span className={stls.bold}>
            Одно из направлений подготовки и повышения квалификации психологов,
          </span>{' '}
          в рамках которого психолог получает{' '}
          <span className={stls.bold}>
            профессиональное развитие и поддержку
          </span>{' '}
          через обсуждение и анализ клиентских случаев в кругу единомышленников
          под руководством более опытного коллеги (супервизора).
          <br />
          <br />
          Участники программы в теплой и безопасной атмосфере
          <span className={stls.bold}> смогут прояснить трудности, </span>
          возникающие в работе с клиентами, расширить профессиональный кругозор
          за счёт анализа множества различных проблемных ситуаций и подходов к
          их решению и{' '}
          <span className={stls.bold}>
            укрепить уверенность в себе, как в специалисте.
          </span>
        </p>
      </div>
      <div className={stls.imagesBlock}>
        <div className={classNames(stls.column, stls.column1)}>
          {imageContainer1.map((image, idx) => (
            <div className={stls.imageContainer} key={image + idx}>
              <CldImage
                src={image}
                alt='Мероприятия'
                width={isLaptopLayout ? 235 : 271}
                height={350}
                className={stls.image}
              />
            </div>
          ))}
        </div>
        <div className={classNames(stls.column, stls.column2)}>
          {imageContainer2.map(image => (
            <div className={stls.imageContainer} key={image}>
              <CldImage
                src={image}
                alt='Мероприятия'
                width={isLaptopLayout ? 235 : 271}
                height={350}
                className={stls.image}
              />
            </div>
          ))}
        </div>
      </div>
      {isMobileAndTabletLayout && (
        <Swiper slidesPerView={isMobileLayout ? 1.3 : 2} spaceBetween={0}>
          {imageContainerMob.map((image, idx) => (
            <SwiperSlide key={image + idx} className={stls.slide}>
              <div className={stls.imageContainer} key={image + idx}>
                <CldImage
                  src={image}
                  alt='Мероприятия'
                  width={227}
                  height={270}
                  className={stls.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  )
}

export default GroupSupervisionDesc
