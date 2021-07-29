import stls from '@/styles/components/general/ScheduleCard.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import ImgAllWebinars from '@/components/imgs/webinars/ImgAllWebinars'
import CtaText from '@/components/general/CtaText'
import { IconPlayer } from '@/components/icons'

const ScheduleCard = ({ mobileLayout = false }) => {
  return (
    <Link href='/'>
      <a>
        <article
          className={classNames({
            [stls.container]: true,
            [stls.mobileLayout]: mobileLayout
          })}>
          <div className={stls.backgroundImage}>
            <ImgAllWebinars />
          </div>
          <div className={stls.content}>
            <div className={stls.circleContainer}>
              <div className={stls.iconContainer}>
                <IconPlayer />
              </div>
            </div>
            <h3 className={stls.title}>Расписание всех&nbsp;вебинаров</h3>
            <div className={stls.btnContainer}>
              <CtaText text='Смотреть все' cnu />
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default ScheduleCard
