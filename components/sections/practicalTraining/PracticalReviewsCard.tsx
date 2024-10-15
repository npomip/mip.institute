import stls from '@/styles/components/sections/practicalTraining/PracticalReviewsCard.module.sass'
import classNames from 'classnames'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import PopupReviewNew from '@/components/popups/PopupReviewNew'

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
  image: any
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

  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }
  const renderedText = answer.replace(/<br\s*\/?>/gi, '\n\n')
  const lines = renderedText.split('\n\n')

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
          {markedTitle ? (
            <ReactMarkdown components={customRenderers}>{name}</ReactMarkdown>
          ) : (
            name
          )}
        </div>
        <div className={stls.text}>
          {lines.map((line, index) => (
            <ReactMarkdown key={index} components={customRenderers}>
              {line}
            </ReactMarkdown>
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
