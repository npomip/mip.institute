import { IconFinger } from '@/components/icons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/lectorium/VideoReviews.module.sass'
import CustomNextButton from '@/ui/CustomNextButton'
import CustomPrevButton from '@/ui/CustomPrevButton'
import Wrapper from '@/ui/Wrapper'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), {
  ssr: false
})
SwiperCore.use([Navigation, Scrollbar])

const VideoReviews = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const list = [
    'idVWeZaDkV9yhnzDxJKoYw',
    'o4hD6B7bbP6Y8pX6a1awvw',
    'ujWhMbRfiCsxFUTsZedwim',
    '0YHjjFQht1uewcDTubA4Uq',
    'vZGYoKvYKZvexh5HANcc4r',
    'pYVT3iXAkxWaQDtJTKEZfP',
    '9dHuZCQa3zFwyTNBZkwB9N'
  ]
  const swiperRef = useRef(null)
  const iframesRef = useRef([])

  const handleSlideChange = swiper => {
    iframesRef.current.forEach(player => {
      console.log(player.current)

      // await player.pause()
    })
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          ВИДЕО – <span className={stls.colored}>ОТЗЫВЫ</span>
        </h2>
        <div className={stls.slides}>
          <Swiper
            ref={swiperRef}
            scrollbar
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button'
            }}
            onSlideChange={handleSlideChange}
            slidesPerView={isMobileAndTabletLayout ? 1.3 : 3}
            spaceBetween={isMobileAndTabletLayout ? 0 : 20}
            allowTouchMove={isMobileAndTabletLayout ? true : false}
            modules={[Navigation, Scrollbar]}
            className={stls.mySwiper}>
            {list.map((videoId, idx) => (
              <SwiperSlide key={videoId + idx}>
                <div className={stls.playerWrapper}>
                  <KinescopePlayer
                    ref={el => (iframesRef.current[idx] = el)}
                    className={stls.kinescope}
                    videoId={videoId}
                    controls='false'
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className='custom-prev-button-container'>
              <CustomPrevButton
                left={5}
                top={0}
                mobileTop={-30}
                mobileLeft={100}
              />
            </div>
            <div className='custom-next-button-container'>
              <CustomNextButton
                left={0}
                top={0}
                mobileTop={-30}
                mobileLeft={-115}
              />
            </div>
          </Swiper>
          {/* <div className={stls.finger}>
            <IconFinger />
          </div> */}
        </div>
      </Wrapper>
    </section>
  )
}

export default VideoReviews
