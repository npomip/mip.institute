import routes from '@/config/routes'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/cards/LectoriumIndexCard.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import PopupTrigger from '@/ui/PopupTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { IconBell } from '../icons'

interface Step {
  card: Lectorium
}

const LectoriumIndexCard: FC<Step> = ({ card }) => {
  console.log(card)
  const date = new Date(card.targetDate)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
  console.log(formattedDate)
  const endTime = card.endTime.slice(0, 5)

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <Link
      passHref
      className={stls.oneCard}
      href={`${routes.front.lectoriums}/${card.slug}`}>
      <div className={stls.cardText}>
        <div className={stls.header}>
            <p className={stls.title}>Дата</p>
            <p className={stls.subtitle}>
              {formattedDate}-{endTime}
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
        <p className={stls.subtitle}>Очный: Москва, Докучаев переулок, 8</p>
        <p className={stls.title}>Спикер:</p>
        <p className={stls.subtitle}>{card.speaker.title}</p>
        <Image
          className={stls.image}
          src={card.speaker.picture.url}
          width={ isMobileAndTabletLayout ? 120 : 58}
          height={isMobileAndTabletLayout ? 120 : 58}
          alt='Программа'
        />
        <div className={stls.footer}>
          <div className={stls.price}>
            <p className={stls.title}>Стоимость:</p>
            <p className={stls.subtitle}>{card.price} руб.</p>
          </div>
          <button className={stls.btn}>
            Принять участие
          </button>
        </div>
      </div>
    </Link>
  )
}

export default LectoriumIndexCard
