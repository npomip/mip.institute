import stls from '@/styles/components/practicalTraining/PracticalReviewsCard.module.sass'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import Image from 'next/image'
import PopupReviewNew from '../popups/PopupReviewNew'

type Props = {
  number: number
  name: string
  answer: string
  markedTitle?: boolean
  slides: {
    answer: string
    question: string
  }[]
  margin?: number
  image
}

const PracticalReviewsCard = ({
  name,
  answer,
  number,
  markedTitle,
  image,
  slides,
  margin = 0
}: Props) => {
  const even = number % 2 === 0
  const renderer = new marked.Renderer()
  renderer.strong = text => `<span className=${stls.strongText}>${text}</span>`
  marked.setOptions({ renderer })

  const renderedTitle = markedTitle ? parse(marked(name)) : name
  const renderedText = marked(answer)
  const lines = renderedText.split('<br />');
  return (
    <div
      className={classNames({
        [stls.card]: true,
        [stls.whiteCard]: !even,
        [stls.purpleCard]: even
      })}>
      <div className={stls.image}>
        <Image
          className={stls.imageClass}
          src={image.url ?? image}
          alt='Фото'
          width={112}
          height={112}
        />
      </div>
      <div className={stls.description}>
        <div className={stls.title} style={{ marginBottom: `${margin}px` }}>
          {renderedTitle}
        </div>
        <div
          className={classNames({
            [stls.text]: true
          })}>
          {lines.map((line, index) => (
            <div key={index}>{parse(line)}</div>
          ))}
        </div>
      </div>
      <div className={stls.btn}>
        <PopupReviewNew
          btn='zeta'
          cta='askQuestion'
          slides={slides}
          image={image}
          name={name}
        />
      </div>
    </div>
  )
}

export default PracticalReviewsCard
