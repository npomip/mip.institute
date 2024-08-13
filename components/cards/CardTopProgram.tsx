import getNextWednesday from '@/helpers/getNextThursday'
import stls from '@/styles/components/cards/CardTopProgram.module.sass'
import Link from 'next/link'

type Props = {
  portrait: JSX.Element
  title: string
  studyHours: number
  href: string
}

const CardTopProgram = ({ portrait, title, studyHours, href }: Props) => {
  return (
    <Link href={href} passHref>
      <a className={stls.container}>
        {portrait && (
          <div className={stls.portrait}>
            <span className={stls.filter}></span>
            {portrait}
          </div>
        )}

        <p className={stls.title}>{title}</p>
        <p className={stls.subtitle}>
          Ближайшее зачисление: <br /> {getNextWednesday(new Date())}
        </p>
        <p className={stls.subtitle}>Кол-во часов: {studyHours}</p>
      </a>
    </Link>
  )
}

export default CardTopProgram
