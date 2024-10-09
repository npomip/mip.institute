import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

import stls from '@/styles/components/sections/Companies.module.sass'
import Image from 'next/image'
import SwiperCore from 'swiper'
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '@/ui/Wrapper'
import 'swiper/css/scrollbar'
import companies from 'constants/companies'
SwiperCore.use([Pagination, Scrollbar, Autoplay])

const Companies = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2>Ведущие компании доверяют обучение своих сотрудников нам</h2>
        <div className={stls.companies}>
          <Swiper
            slidesPerView={isMobileAndTabletLayout ? 2 : 4}
            spaceBetween={isMobileAndTabletLayout ? 20 : 30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={2000}
            scrollbar={{ draggable: true }}
            modules={[Scrollbar]}
            className={stls.mySwiper}>
            {companies.map(block => (
              <SwiperSlide key={block.id} className={stls.slide}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  className={stls.img}
                  width={isMobileAndTabletLayout ? block.mobWidth : block.width}
                  height={
                    isMobileAndTabletLayout ? block.mobHeight : block.height
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </section>
  )
}

export default Companies
