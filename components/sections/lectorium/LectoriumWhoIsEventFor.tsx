import CardWhoIsEventFor from '@/components/cards/CardWhoIsEventFor'
import { IconFinger } from '@/components/icons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/lectorium/LectoriumWhoIsEventFor.module.sass'
import Tag from '@/ui/Tag'
import Wrapper from '@/ui/Wrapper'
import cards from 'constants/lectoriumWhoIsEvent'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
SwiperCore.use([Scrollbar])

const LectoriumWhoIsEventFor = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <div className={stls.tag}>
            <Tag type='purple'>Кому будет интересно</Tag>
          </div>
          <h2 className={stls.title}>
            <span className={stls.colouredTitle}>Для кого </span>мероприятие:
          </h2>
        </div>
        <div className={stls.slides}>
          <Swiper
            scrollbar
            slidesPerView={isMobileAndTabletLayout ? 1.5 : 4}
            spaceBetween={isMobileAndTabletLayout ? 10 : 30}
            modules={[Scrollbar]}>
            {cards.map((el, idx) => (
              <SwiperSlide key={el.text + idx}>
                <div className={stls.cards}>
                  <CardWhoIsEventFor key={idx} card={el} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default LectoriumWhoIsEventFor
