import stls from '@/styles/components/sections/lectorium/LectoriumHowGoesClasses.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import Wrapper from '@/ui/Wrapper'
import dynamic from 'next/dynamic'
import TwoColumnsPractical from '@/components/sections/practicalTraining/TwoColumnsPractical'
import IconVioletCircle from '@/components/icons/IconVioletCircle'
import classes1 from '@/public/assets/imgs/lectorium/classes1.png'
import classes2 from '@/public/assets/imgs/lectorium/classes2.png'
import classes3 from '@/public/assets/imgs/lectorium/classes3.png'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { Swiper, SwiperSlide } from 'swiper/react'
const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), {
  ssr: false
})
const LectoriumHowGoesClasses = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const classNameImages = [stls.imgClass1, stls.imgClass2, stls.imgClass3]
  const list = [
    'интересные лекции',
    'оживлённые дискуссии',
    'работа в двойках и тройках',
    'пробные консультации',
    'и даже гипноз'
  ]
  const images = [classes1, classes2, classes3]

  return (
    <section className={stls.container}>
      <Wrapper>
        <TwoColumnsPractical fixHeight>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.left]: true
            })}>
            <p className={stls.title}>Видео–ролик</p>
            <div className={stls.playerWrapper}>
              <KinescopePlayer
                className={stls.kinescope}
                videoId='2WALhR1ZcszBWNRXQ2kNSB'
              />
            </div>
          </div>
          <div
            className={classNames({
              [stls.layout]: true,
              [stls.right]: true
            })}>
            <h2 className={stls.titleRight}>
              КАК
              <span className={stls.colouredTitle}> ПРОХОДЯТ ЗАНЯТИЯ</span>
            </h2>
            <div className={stls.text}>
              <p className={stls.descriptionRight}>
                Мы обучаем не только онлайн – наши студенты могут лично посетить
                различные лекции, семинары и мастер–классы.
              </p>
              {isMobileAndTabletLayout && (
                <span className={stls.separator}></span>
              )}
              <p className={stls.listName}>
                В аудиториях нашего здания на Красных воротах{' '}
                <span className={stls.strongText}>вас ожидают:</span>
              </p>
            </div>
            <div className={stls.list}>
              {list.map((el, idx) => (
                <div key={el + idx} className={stls.listItem}>
                  <IconVioletCircle width='20px' height='20px' />
                  <p className={stls.listText}>{el}</p>
                </div>
              ))}
            </div>
            <div className={stls.imgRight}>
              {images.map((src, idx) => (
                <div className={classNameImages[idx]} key={idx}>
                  <Image
                    src={src}
                    alt='Занятия'
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
            {isMobileAndTabletLayout && (
              <div className={stls.slides}>
                <Swiper
                  slidesPerView={1.3}
                  spaceBetween={10}
                  className={stls.mySwiper}>
                  {images.map((src, idx) => (
                    <SwiperSlide key={idx} className={stls.slide}>
                      <Image
                        src={src}
                        alt='Занятия'
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

export default LectoriumHowGoesClasses
