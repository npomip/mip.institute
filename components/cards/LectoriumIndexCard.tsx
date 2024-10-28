import routes from '@/config/routes'
import stls from '@/styles/components/cards/LectoriumIndexCard.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface Step {
  card: Lectorium
}

const LectoriumIndexCard: FC<Step> = ({ card }) => {

  console.log(card);
  
  return (
    <Link
      passHref
      className={stls.oneCard}
      href={`${routes.front.lectoriums}/${card.slug}`}>
      
      <div className={stls.cardText}>
        <p className={stls.cardTitle}>{card.title}</p>
        <div className={stls.additionalInfo}>
          <p>{card.subtitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default LectoriumIndexCard
