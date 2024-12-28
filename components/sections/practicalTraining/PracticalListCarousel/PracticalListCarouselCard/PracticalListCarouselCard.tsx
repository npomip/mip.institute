import stls from './PracticalListCarouselCard.module.sass'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

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

  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }

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
          {markedTitle ? (
            <ReactMarkdown components={customRenderers}>{title}</ReactMarkdown>
          ) : (
            title
          )}
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
