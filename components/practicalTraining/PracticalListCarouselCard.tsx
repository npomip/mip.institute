import stls from '@/styles/components/practicalTraining/PracticalListCarouselCard.module.sass'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'

type Props = {
  number: number
  title: string
  text: string
  markedTitle?: boolean
  margin?: number
}

const PracticalListCarouselCard = ({
  title,
  text,
  number,
  markedTitle,
  margin = 0
}: Props) => {
  const even = number % 2 === 0
  const renderer = new marked.Renderer()
  renderer.strong = text => `<span className=${stls.strongText}>${text}</span>`
  marked.setOptions({ renderer })

  const renderedTitle = markedTitle ? parse(marked(title)) : title

  return (
    <div
      className={classNames({
        [stls.card]: true,
        [stls.whiteCard]: !even,
        [stls.purpleCard]: even
      })}>
      <div
        className={classNames({
          [stls.number]: true,
          [stls.whiteNumber]: even,
          [stls.purpleNumber]: !even
        })}>
        {number}
      </div>
      <div className={stls.description}>
        <div className={stls.title} style={{ marginBottom: `${margin}px` }}>
          {renderedTitle}
        </div>
        <div
          className={classNames({
            [stls.text]: true,
            [stls.bigText]: markedTitle
          })}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default PracticalListCarouselCard
