import { IconFinger } from '@/components/icons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/lectorium/VideoReviews.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import SwiperCore from 'swiper'
import { Autoplay, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { v4 as uuidv4 } from 'uuid'
SwiperCore.use([Scrollbar])
const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), {
  ssr: false
})

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

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          ВИДЕО – <span className={stls.colored}>ОТЗЫВЫ</span>
        </h2>
        <div className={stls.slides}>
          <Swiper
            scrollbar
            slidesPerView={isMobileAndTabletLayout ? 1.3 : 3}
            spaceBetween={isMobileAndTabletLayout ? 0 : 20}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {list.map((videoId, idx) => (
              <SwiperSlide key={videoId + idx} className={stls.slide}>
                <div className={stls.playerWrapper}>
                  <KinescopePlayer
                    className={stls.kinescope}
                    videoId={videoId}
                    controls='false'
                    uid={uuidv4()}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={stls.finger}>
            <IconFinger />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default VideoReviews
