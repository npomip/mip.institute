import stls from '@/styles/components/sections/groupSupervision/GroupSupervisionDesc.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import desc1 from '@/public/assets/imgs/groupSupervision/Desc/desc1.png'
import desc2 from '@/public/assets/imgs/groupSupervision/Desc/desc2.png'
import desc3 from '@/public/assets/imgs/groupSupervision/Desc/desc3.png'
import desc4 from '@/public/assets/imgs/groupSupervision/Desc/desc4.png'
import desc5 from '@/public/assets/imgs/groupSupervision/Desc/desc5.png'
import background from '@/public/assets/imgs/groupSupervision/Desc/descBackground.png'
import Image from 'next/image'
SwiperCore.use([Scrollbar])

const GroupSupervisionDesc = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const isLaptopLayout = useBetterMediaQuery('(max-width: 1200px)')

  const imageContainer1 = [desc1, desc2, desc3]
  const imageContainer2 = [desc4, desc5]
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
          </span>
          в рамках которого психолог получает{' '}
          <span className={stls.bold}>
            профессиональное развитие и поддержку
          </span>
          через обсуждение и анализ клиентских случаев в кругу единомышленников
          под руководством более опытного коллеги (супервизора).
          <br />
          <br />
          Участники программы в теплой и безопасной атмосфере
          <span className={stls.bold}>смогут прояснить трудности,</span>
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
            <div className={stls.imageContainer} key={image.src + idx}>
              <Image
                src={image.src}
                alt='Мероприятия'
                width={isLaptopLayout ? 235 : 271}
                height={350}
                className={stls.image}
              />
            </div>
          ))}
        </div>
        <div className={classNames(stls.column, stls.column2)}>
          {imageContainer2.map((image, idx) => (
            <div className={stls.imageContainer} key={image.src + idx}>
              <Image
                src={image.src}
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
            <SwiperSlide key={image.src + idx} className={stls.slide}>
              <div className={stls.imageContainer} key={image.src + idx}>
                <Image
                  src={image.src}
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
