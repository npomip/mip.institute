import stls from '@/components/sections/groupSupervision/Roles/Roles.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { rolesDescription } from 'constants/GroupSupervision/roles'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardGroupSupervisionRole from '@/components/cards/CardGroupSupervisionRole'

SwiperCore.use([Scrollbar])

const Roles = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')
  const [activeBtn, setActiveBtn] = useState(0)

  return (
    <section className={stls.container}>
      <div>
        <h2 className={stls.title}>
          <span className={stls.coloredTitle}>Роли </span>
          участников
        </h2>
        {!isMobileAndTabletLayout &&
          rolesDescription.map((btn, idx) => (
            <button
              className={classNames(stls.btn, {
                [stls.active]: idx === activeBtn
              })}
              onClick={() => setActiveBtn(idx)}
              key={btn.title}
              aria-pressed={idx === activeBtn}>
              {btn.title}
            </button>
          ))}
      </div>

      <div>
        <p className={stls.text}>
          <span className={stls.bold}>
            Супервизия является неотъемлемой частью профессионального развития
            психолога.&nbsp;
          </span>
          В игровом формате отрабатываются кейсы из реальной практики.
          Супервизия предусматривает роли:&nbsp;
          <span className={stls.bold}>протагонист, клиент, наблюдатель.</span>
          Участники могут меняться ролями после завершения сессии.
        </p>

        {isMobileAndTabletLayout ? (
          <Swiper
            scrollbar
            slidesPerView={isMobileLayout ? 1.1 : 1.4}
            spaceBetween={isMobileLayout ? 10 : 25}
            modules={[Scrollbar]}>
            {rolesDescription.map((role, idx) => (
              <SwiperSlide key={role.title + idx}>
                <div className={stls.cards}>
                  <CardGroupSupervisionRole role={role} key={role.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <CardGroupSupervisionRole role={rolesDescription[activeBtn]} />
        )}
      </div>
    </section>
  )
}

export default Roles
