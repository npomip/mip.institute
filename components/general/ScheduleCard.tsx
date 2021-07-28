import stls from '@/styles/components/general/ScheduleCard.module.sass'
import classNames from 'classnames'
import VideoPlayerCircle from '@/components/general/VideoPlayerCircle'
import AllWebinars from '@/components/imgs/webinars/AllWebinars'
import { BtnText } from '@/components/btns'

const ScheduleCard = ({ mobileLayout = false }) => {
  return (
    <article
      className={classNames({
        [stls.container]: true,
        [stls.mobileLayout]: mobileLayout
      })}>
      <AllWebinars mobileLayout />
      <div className={stls.content}>
        <div className={stls.circleContainer}>
          <VideoPlayerCircle />
        </div>
        <h3 className={stls.title}>Расписание всех&nbsp;вебинаров</h3>
        <div className={stls.btnContainer}>
          <BtnText text='Смотреть все' cnu />
        </div>
      </div>
    </article>
  )
}

export default ScheduleCard
