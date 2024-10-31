import stls from '@/styles/components/cards/CardReviewWithStars.module.sass'
import classNames from 'classnames'
import IconStarRatingCard from '../icons/IconStarRatingCard'

type Props = {
  number: number
  review: {
    name: string
    date: string
    text: string
    picture: {
      url: string
      width: string
      height: string
    }
  }
}

const CardReviewWithStars = ({ number, review }: Props) => {
  const date = new Date(review.date)
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
  console.log(formattedDate);
  
  return (
    <div
      className={classNames(stls.container, { [stls.violetBg]: number === 2 })}>
      <p className={stls.date}>{formattedDate}</p>
      <div className={stls.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <IconStarRatingCard key={i} />
        ))}
      </div>
      <p className={stls.text}>
        {review.text}
      </p>
      <div className={stls.author}>
        <div className={stls.image}></div>
        <p className={stls.name}>{review.name}</p>
      </div>
    </div>
  )
}

export default CardReviewWithStars
