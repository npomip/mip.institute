import stls from '@/styles/components/cards/CardTopProgram.module.sass'
import Link from 'next/link'
import ProgramAdmissionUntil from '../program/ProgramAdmissionUntil'

type Props = {
  portrait: JSX.Element
  title: string
  studyHours: number
  href: string
}

const CardTopProgram = ({ portrait, title, studyHours, href }: Props) => {
  return (
    <Link href={href} passHref className={stls.container}>
      {portrait && (
        <div className={stls.portrait}>
          <span className={stls.filter}></span>
          {portrait}
        </div>
      )}

      <p className={stls.title}>{title}</p>
      <p className={stls.subtitle}>
        Ближайшее зачисление: <br /> {ProgramAdmissionUntil()}
      </p>
      <p className={stls.subtitle}>Кол-во часов: {studyHours}</p>
    </Link>
  )
}

export default CardTopProgram
