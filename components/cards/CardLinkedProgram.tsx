import getNextWednesday from '@/helpers/getNextThursday'
import stls from '@/styles/components/cards/CardLinkedProgram.module.sass'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  portrait: string | StaticImageData | JSX.Element
  title: string
}

const CardLinkedProgram = ({ portrait, title }: Props) => {
  return (
    <div className={stls.container}>
      {portrait && (
        <div className={stls.portrait}>
          <span className={stls.filter}></span>
          {portrait}
        </div>
      )}
      <div className={stls.innerContainer}>
        <p className={stls.title}>{title}</p>
        <div className={stls.bottomPart}>
          <p className={stls.subtitle}>
            <span>Обучение с третьего курса</span>
          </p>
          <p className={stls.subtitle}>
            <span>Включено в стоимость</span> 
          </p>
          <p className={stls.subtitle}>
            <span>По окончанию обучения второй диплом</span> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardLinkedProgram
