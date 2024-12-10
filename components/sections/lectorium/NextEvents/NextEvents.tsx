import CardNextEvents from '@/components/cards/CardNextEvents'
import { IconFinger } from '@/components/icons'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './NextEvents.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Tag from '@/ui/Tag'
import Wrapper from '@/ui/Wrapper'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Scrollbar])

type Props = {
  lectorium: Lectorium
}

const NextEvents = ({ lectorium }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.header}>
          <div className={stls.tag}>
            <Tag type='purple'>Афиша</Tag>
          </div>
          <h2 className={stls.title}>
            следующие <span className={stls.colouredTitle}>мероприятия</span>
          </h2>
        </div>
        <div className={stls.slides}>
          <Swiper
            scrollbar
            slidesPerView={isMobileAndTabletLayout ? 1.5 : 3}
            spaceBetween={isMobileAndTabletLayout ? 10 : 30}
            modules={[Scrollbar]}>
            {lectorium.lectoriums.map((seminar, idx) => (
              <SwiperSlide key={idx}>
                <div className={stls.cards}>
                  <CardNextEvents seminar={seminar} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={stls.finger}>
          <IconFinger />
        </div>
      </Wrapper>
    </section>
  )
}

export default NextEvents
