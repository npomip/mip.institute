import stls from '@/styles/components/sections/groupSupervision/GroupSupervisionShort.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import programs from 'constants/GroupSupervision/programs'

SwiperCore.use([Scrollbar])

const GroupSupervisionShort = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        <span className={stls.coloredTitle}>
          Краткая&nbsp;
          {isMobileAndTabletLayout ? (
            <>
              <br />
              программа
            </>
          ) : (
            'программа'
          )}
        </span>
        &nbsp;курса
      </h2>
      <div className={stls.blocks}>
        {programs.map((el, idx) => (
          <div className={stls.block} key={`${el}-${idx}`}>
            <div className={stls.top}>
              <span className={stls.number}>
                {isMobileAndTabletLayout
                  ? `(${el.number})`
                  : String(el.number).padStart(2, '0')}
              </span>
              <p className={stls.subTitle}>{el.title}</p>
            </div>
            <div className={stls.text}>{el.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default GroupSupervisionShort
