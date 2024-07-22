import stls from '@/styles/components/cards/BachelorSlugCard.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import ThreeNumber from '../icons/ThreeNumber'
import FourNumber from '../icons/FourNumber'
import TwoNumber from '../icons/TwoNumber'
import { OneNumber } from '../icons'
import { FC, ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import routes from '@/config/routes'

interface Step {
  card: {
      id: number;
      icon?: ReactNode;
      title?: string;
      educationCode: string
      minTime: number
      maxTime: number
      admissionDate: string
      slug: string
      heroPicture: {
        url: string
        height: number
        width: number
      }
  }
}

const BachelorSlugCard: FC<Step> = ({card}) => {
  
  return (
    <Link passHref href={`${routes.front.bachelors}/${card.slug}`}>
      <div className={stls.oneCard}>
      <div className={stls.img}>
        <Image className={stls.image} src={card.heroPicture.url}
        width={370} height={240}
        // layout='fill'
        />

      </div>
      <div className={stls.cardText}>
        <p className={stls.cardTitle}>{card.educationCode}{' '}{card.title}</p>
        <div className={stls.additionalInfo}>
          <p><span>Ближайшие зачисления:</span> {card.admissionDate}</p>
          <p><span>Срок обучения:</span> {card.minTime} - {card.maxTime} года</p>
        </div>
      </div>
      </div>
    </Link>
  )
}

export default BachelorSlugCard
