import stls from '@/styles/components/general/WebinarCard.module.sass'
import classNames from 'classnames'
import { BtnText } from '@/components/btns'

const WebinarCard = ({ webinarData }) => {
  const {
    date: { day, month, time, weekday },
    name,
    topic,
    photo,
    bgColor
  } = webinarData

  return (
    <article
      className={classNames({ [stls.container]: true, [stls[bgColor]]: true })}>
      <p className={stls.p}>
        <span className={stls.date}>
          {day} {month},&nbsp;
        </span>
        {time}
      </p>
      <p className={stls.weekdayP}>{weekday}</p>
      <div className={stls.host}>
        {photo}
        <div className={stls.name}>
          <p className={stls.hostP}>Спикер:</p>
          <p className={stls.p}>{name}</p>
        </div>
      </div>
      <div className={stls.bottom}>
        <h3 className={stls.topic}>{topic}</h3>
        <BtnText text='Подробнее' ctheta />
      </div>
    </article>
  )
}

export default WebinarCard
