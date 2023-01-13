import { getThreeLettersRuMonths, getRuDaysOfWeek } from '@/helpers/index'
import stls from '@/styles/components/cards/CardWebinarAlt.module.sass'
import { IconBell } from '@/components/icons'
import CtaText from '@/components/general/CtaText'

type CardWebinarAltType = {
  date: Date
  name: string
  picture: any
  title: string
}

// leadmip@ipo.msk.ru
// hK8-p2T-FFs-TK8

const CardWebinarAlt = ({ date, name, picture, title }: CardWebinarAltType) => {
  const newDate = new Date(date)

  const monhts = getThreeLettersRuMonths()
  const daysOfWeek = getRuDaysOfWeek()

  return (
    <button className={stls.container}>
      <span className={stls.bell}>
        <IconBell />
      </span>
      <span className={stls.when}>
        <span className={stls.date}>
          {newDate.getDate()} {monhts[newDate.getMonth()]}.,{' '}
          {newDate.getUTCHours() + 3}:
          {newDate.getMinutes() < 10
            ? `0${newDate.getMinutes()}`
            : newDate.getMinutes()}{' '}
        </span>
        <span className={stls.dayOfWeek}>{daysOfWeek[newDate.getDay()]}</span>
      </span>
      <span className={stls.speaker}>
        <span className={stls.img}>{picture}</span>
        <span className={stls.right}>
          <span className={stls.label}>Спикер:</span>
          <p className={stls.name}>{name}</p>
          <h2 className={stls.title}>{title}</h2>
          <span className={stls.link}>
            <CtaText text={'Подробнее'} ctheta />
          </span>
        </span>
      </span>
    </button>
  )
}

export default CardWebinarAlt
