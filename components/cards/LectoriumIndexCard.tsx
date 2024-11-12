import routes from '@/config/routes'
import { calculateEventTimeAndDate } from '@/helpers/calculateEventTimeAndDate'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/cards/LectoriumIndexCard.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import PopupTrigger from '@/ui/PopupTrigger'
import classNames from 'classnames'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IconBell } from '../icons'

interface Step {
  card: Lectorium
}

const LectoriumIndexCard: FC<Step> = ({ card }) => {
  const { formattedDateForCard, startTime } = calculateEventTimeAndDate(
    card.targetDate
  )
  const endTime = card.endTime.slice(0, 5)
  const now = dayjs()
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const formattedDateToCompare = dayjs(card.targetDate).tz('Europe/Moscow')
  const isDateInFuture = formattedDateToCompare.isAfter(now)

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    if (target.closest('.popup-trigger')) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  return (
    <div className={stls.oneCard} onClick={handleCardClick}>
      <Link
        href={`${routes.front.lectoriums}/${card.slug}`}
        className={stls.cardText}>
        <div className={stls.header}>
          <p className={stls.title}>Дата:</p>
          <p className={stls.subtitle}>
            {formattedDateForCard}, {startTime}-{endTime}
          </p>
          <div className={stls.bell}>
            <IconBell />
          </div>
        </div>

        <p className={stls.title}>Тема:</p>
        <p className={stls.subtitleBig}>
          {card.title}
          {card.subtitle}
        </p>
        <p className={stls.title}>Формат:</p>
        <p className={stls.subtitle}>{card.type === 'online' ? 'Онлайн' : 'Очный: Москва, Докучаев переулок, 8'}</p>
        <p className={classNames(stls.title, stls.priceMobile)}>Стоимость:</p>
        <p className={classNames(stls.subtitle, stls.priceMobile)}>
          {card.price} руб.
        </p>
        <p className={stls.title}>Спикер:</p>
        <p className={stls.subtitle}>{card.speaker.title}</p>
        <Image
          className={stls.image}
          src={card.speaker.picture.url}
          width={isMobileAndTabletLayout ? 120 : 58}
          height={isMobileAndTabletLayout ? 120 : 58}
          alt='Программа'
        />
      </Link>
      <div className={stls.footer}>
        <div className={stls.price}>
          <p className={classNames(stls.title, stls.priceDesktop)}>
            Стоимость:
          </p>
          <p className={classNames(stls.subtitle, stls.priceDesktop)}>
            {card.price} руб.
          </p>
        </div>
        {isDateInFuture ? (
          <div className={classNames('popup-trigger', stls.btns)}>
            <PopupTrigger btn='alpha' cta='takePart' />
          </div>
        ) : (
          <span className={stls.completed}>Мероприятие состоялось!</span>
        )}
      </div>
    </div>
  )
}

export default LectoriumIndexCard
