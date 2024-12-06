import stls from '@/components/sections/groupSupervision/Supervisors/Supervisors.module.sass'
import Image from 'next/image'
import supervisors from 'constants/GroupSupervision/supervisors'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
// import SwiperCore from 'swiper'
// import { Scrollbar } from 'swiper/modules'
// import { Swiper, SwiperSlide } from 'swiper/react'

// SwiperCore.use([Scrollbar])
const Supervisors = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')

  const card = (supervisor: (typeof supervisors)[number]) => (
    <li className={stls.supervisor} key={supervisor.name}>
      <div className={stls.imageWrapper}>
        <Image
          className={stls.image}
          src={'https://res.cloudinary.com/mipinstitute/image/upload/v1733486885/IMG_8055_c9361a0381.jpg'}
          alt={supervisor.name}
          fill
        />
      </div>
      <p className={stls.name}>{supervisor.name}</p>
      <span className={stls.position}>{supervisor.position}</span>
    </li>
  )

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>Супервизоры</h2>
      {/* {isMobileAndTabletLayout ? (
        <Swiper
          scrollbar
          slidesPerView={isMobileLayout ? 1.1 : 1.4}
          spaceBetween={isMobileLayout ? 10 : 25}
          modules={[Scrollbar]}>
          {supervisors.map(supervisor => (
            <SwiperSlide key={supervisor.name}>
              <div className={stls.cards}>{card(supervisor)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : ( */}
        <ul className={stls.list}>
          {supervisors.map(supervisor => card(supervisor))}
        </ul>
      {/* )} */}
    </section>
  )
}

export default Supervisors
