import stls from '@/styles/components/general/WebinarCard.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
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
    <article className={classNames(stls.container, stls[bgColor])}>
      <p className={stls.regularPara}>
        <span className={stls.boldDate}>
          {day} {month},&nbsp;
        </span>
        {time}
      </p>
      <p className={stls.lightPara}>{weekday}</p>
      <div className={stls.speakerInfo}>
        <div className={stls.imageContainer}>
          <Image src={photo} alt={name} placeholder={'blur'} />
        </div>
        <div className={stls.speakerNameContainer}>
          <p className={stls.lightPara}>Спикер:</p>
          <p className={stls.regularPara}>{name}</p>
        </div>
      </div>
      <div className={stls.titleAndBtnContainer}>
        <h3 className={stls.topic}>{topic}</h3>
        <BtnText text='Подробнее' ctheta />
      </div>
    </article>
  )
}

export default WebinarCard
