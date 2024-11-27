import stls from '@/styles/components/sections/groupSupervision/GroupSupervisionInclude.module.sass'
import classNames from 'classnames'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import SwiperCore from 'swiper'
import { Scrollbar } from 'swiper/modules'
import info from 'constants/GroupSupervision/include'

SwiperCore.use([Scrollbar])

const GroupSupervisionInclude = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <section className={stls.container}>
      <div className={stls.content}>
        <div className={stls.startBlock}>
          <p>
            что входит <br />в программу:
          </p>
        </div>
        <div className={stls.blocks}>
          {info.map((el, idx) => (
            <div key={`${el}-${idx}`} className={stls.block}>
              <div className={stls.icon}>{el.icon}</div>
              <p className={stls.text}>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GroupSupervisionInclude
