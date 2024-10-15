import stls from '@/styles/components/cards/CardQuizResult.module.sass'
import PopupTrigger from '@/ui/PopupTrigger'
import getNextWednesday from '@/helpers/getNextThursday'

interface Props {
  portrait: string
  title: string
  studyHours: number
}

const CardQuizResult = ({ portrait, title, studyHours }: Props) => {
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
            Ближайшее зачисление: <br /> {getNextWednesday(new Date())}
          </p>
          <p className={stls.subtitle}>Кол-во часов: {studyHours}</p>
        </div>
        <PopupTrigger btn='test' cta='familiarize' testProgram={title} />
      </div>
    </div>
  )
}

export default CardQuizResult
