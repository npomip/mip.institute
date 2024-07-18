import getNextWednesday from '@/helpers/getNextThursday'
import stls from '@/styles/components/cards/CardLinkedProgram.module.sass'
import Link from 'next/link'

const CardLinkedProgram = ({ portrait, title, studyHours, href }) => {
  return (
    <Link href={href} passHref>
      <a className={stls.container}>
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
              <span>Ближайшее зачисление:</span> {getNextWednesday(new Date())}
            </p>
            <p className={stls.subtitle}><span>Кол-во часов:</span> {studyHours}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardLinkedProgram
