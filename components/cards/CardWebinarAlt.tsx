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
    <div className={stls.container}>
      <div className={stls.bell}>
        <IconBell />
      </div>
      <div className={stls.when}>
        <span className={stls.label}>Дата:</span>
        <span className={stls.date}>
          {daysOfWeek[newDate.getDay()]}{' '}
          {newDate.getDate()} {monhts[newDate.getMonth()]}.,{' '}
          {newDate.getUTCHours() + 3}:
          {newDate.getMinutes() < 10
            ? `0${newDate.getMinutes()}`
            : newDate.getMinutes()}{' '}
        </span>
      </div>
      <div className={stls.speaker}>
        <div className={stls.right}>
          <span className={stls.label}>Тема:</span>
          <h2 className={stls.title}>{title}</h2>
          <span className={stls.label}>Спикер:</span>
          <p className={stls.desc}>{name}</p>
          <div className={stls.img}>{picture}</div>
          <button className={stls.link}>
            Принять участие
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardWebinarAlt
