import stls from '@/styles/components/cards/CardQuizResult.module.sass'
import ProgramAdmission from '../program/ProgramAdmission'
import Link from 'next/link'
import PopupTrigger from '../general/PopupTrigger'

interface Props {
  portrait: string
  title: string
  studyHours: number
  href: string
}

const CardQuizResult = ({ portrait, title, studyHours, href }: Props) => {
  return (
    <div className={stls.container}>
      {portrait && (
        <div className={stls.portrait}>
          <span className={stls.filter}></span>
          {portrait}
        </div>
      )}
      <div className={stls.description}>
        <div className={stls.innerContainer}>
          <p className={stls.title}>{title}</p>
          <p className={stls.subtitle}>
            Ближайшее зачисление: <br /> <ProgramAdmission />
          </p>
          <p className={stls.subtitle}>Кол-во часов: {studyHours}</p>
        </div>
        {/* <Link href={href} passHref>
          <button className={stls.button}>Ознакомиться с программой</button>
        </Link> */}
        <PopupTrigger btn='test' cta='familiarize' testProgram={title}/>
      </div>
    </div>
  )
}

export default CardQuizResult
