import routes from '@/config/routes'
import stls from '@/styles/components/cards/PracticalSlugCard.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Step {
  card: {
    id: number
    title?: string
    admissionDate: string
    slug: string
    duration: string
    programPicture1: {
      url: string
      height: number
      width: number
    }
  }
}

const PracticalSlugCard: FC<Step> = ({ card }) => {
  return (
    <Link passHref href={`${routes.front.practicalTrainings}/${card.slug}`}>
      <a className={stls.oneCard}>
        <div className={stls.img}>
          <Image
            className={stls.image}
            src={card.programPicture1.url}
            width={740}
            height={480}
          />
        </div>
        <div className={stls.cardText}>
          <p className={stls.cardTitle}>
            {card.title}
          </p>
          <div className={stls.additionalInfo}>
            <p>
              <span>Ближайшие зачисления:</span> {card.admissionDate}
            </p>
            <p>
              <span>Срок обучения:</span> {card.duration.split('/')[1].trim()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default PracticalSlugCard
