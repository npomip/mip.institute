import stls from '@/styles/components/cards/BachelorStepCard.module.sass'
import { FC, ReactNode } from 'react'

interface Step {
  card: {
    id: number
    icon?: ReactNode
    title?: string
    subtitle?: string
  }
}

const BachelorStepCard: FC<Step> = ({ card }) => {
  return (
    <div className={stls.oneCard}>
      <div className={stls.icon}>{card.icon}</div>
      <div className={stls.cardText}>
        <p className={stls.cardTitle}>{card.title}</p>
        <p className={stls.cardSubtitle}>{card.subtitle}</p>
      </div>
    </div>
  )
}

export default BachelorStepCard
