import stls from '@/styles/components/cards/CardLinkedProgram.module.sass'
import { StaticImageData } from 'next/image'

type Props = {
  portrait: string | StaticImageData | JSX.Element
  title: string
}

const CardLinkedProgram = ({ portrait, title }: Props) => {
  const text = [
    'Обучение с третьего курса',
    'Включено в стоимость',
    'По окончанию обучения второй диплом'
  ]

  return (
    <div className={stls.container}>
      {portrait && (
        <div className={stls.portrait}>
          <span className={stls.filter} />
          {portrait}
        </div>
      )}
      <div className={stls.innerContainer}>
        <p className={stls.title}>{title}</p>
        <div className={stls.bottomPart}>
          {text.map(el => (
            <p className={stls.subtitle} key={el}>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardLinkedProgram
