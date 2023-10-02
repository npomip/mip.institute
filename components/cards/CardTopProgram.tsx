import stls from '@/styles/components/cards/CardTopProgram.module.sass'
import Link from 'next/link'
import ProgramAdmission from '../program/ProgramAdmission'

const CardTopProgram = ({ portrait, title, studyHours, href }) => {
  return (
    
      <Link href={href} passHref>
        <article className={stls.container}>
        <div className={stls.portrait}>{portrait}</div>
        <p className={stls.title}>{title}</p>
        <p className={stls.subtitle}>Ближайшее зачисление: <br /> <ProgramAdmission /> </p>
        <p className={stls.subtitle}>Кол-во часов: {studyHours}</p>
        </article>
      </Link>
  )
}

export default CardTopProgram