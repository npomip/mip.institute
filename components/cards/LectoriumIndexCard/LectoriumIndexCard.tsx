import routes from '@/config/routes'
import { calculateEventTimeAndDate } from '@/helpers/calculateEventTimeAndDate'
import stls from './LectoriumIndexCard.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import PopupTrigger from '@/ui/PopupTrigger'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Link from 'next/link'
import { FC } from 'react'
import IconBell from '@/components/icons/IconBell'
import BtnAlpha from '@/components/btns/BtnAlpha'
import { useRouter } from 'next/navigation'

interface Step {
  card: Lectorium
}

const LectoriumIndexCard: FC<Step> = ({ card }) => {
  const { formattedDateForCard, startTime } = calculateEventTimeAndDate(card.targetDate)
  const router = useRouter()
  const now = dayjs()

  const formattedDateToCompare = dayjs(card.targetDate).tz('Europe/Moscow')
  const isDateInFuture = formattedDateToCompare.isAfter(now)

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('.popup-trigger')) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const onBuyClick = (timepadHref) => {
    window.open(timepadHref, '_blank')
  }

  return (
    <div className={stls.card} onClick={handleCardClick}>
      <Link href={`${routes.front.lectoriums}/${card.slug}`} className={stls.cardText} passHref>
        <div className={stls.header}>
          <div>
            <p className={stls.title}>Дата:</p>
            <p className={stls.subtitle}>
              {formattedDateForCard}, {startTime}
            </p>
          </div>
          <div className={stls.bell}>
            <IconBell />
          </div>
        </div>

        <p className={stls.title}>Тема:</p>
        <p className={stls.subtitleBig}>
          {card.title}
          {card.subtitle}
        </p>
        <div className={stls.row}>
          <div>
            <p className={stls.title}>Формат:</p>
            <p className={classNames(stls.subtitle, stls.format)}>
              {card.isInternal
                ? card.type === 'online'
                  ? 'Онлайн'
                  : card.type === 'studentsOnly'
                    ? 'Очный: Только для студентов'
                    : 'Очный: Москва'
                : `Очный: ${card.eventAddress}`}
            </p>
          </div>
          <div>
            <p className={stls.title}>Стоимость:</p>
            <p className={stls.subtitle}>
              {card.price} {card.price !== 'Бесплатно' ? 'руб.' : ''}
            </p>
          </div>
        </div>
      </Link>
      <div className={stls.footer}>
        <div className={stls.participate}>
          <BtnAlpha
            text={'Читать описание'}
            onClick={() => router.push(`${routes.front.lectoriums}/${card.slug}`)}
          />
        </div>
        {isDateInFuture && card.type !== 'studentsOnly' ? (
          <button onClick={() => onBuyClick(card.timepadHref)} className={stls.btn}>
            Принять участие
          </button>
        ) : card.type === 'studentsOnly' ? (
          <></>
        ) : (
          <span className={stls.completed}>Мероприятие состоялось!</span>
        )}
      </div>
    </div>
  )
}

export default LectoriumIndexCard
