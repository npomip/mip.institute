import stls from '@/styles/components/cards/CardReviewWithStars.module.sass'
import classNames from 'classnames'
import IconStarRatingCard from '../icons/IconStarRatingCard'

type Props = {
  number: number
}

const CardReviewWithStars = ({ number }: Props) => {
  return (
    <div
      className={classNames(stls.container, { [stls.violetBg]: number === 2 })}>
      <p className={stls.date}>2 октября 2024</p>
      <div className={stls.stars}>
        {Array.from({ length: 5 }, (_, i) => (
          <IconStarRatingCard key={i} />
        ))}
      </div>
      <p className={stls.text}>
        Текстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыватекстотзыва
      </p>
      <div className={stls.author}>
        <div className={stls.image}></div>
        <p className={stls.name}>Имя Фамилия</p>
      </div>
    </div>
  )
}

export default CardReviewWithStars
