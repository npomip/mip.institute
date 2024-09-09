import { PracticalListItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import stls from '@/styles/components/practicalTraining/PracticalListCarouselCard.module.sass'
import classNames from 'classnames'

type Props = {
  card: PracticalListItem
  number: number
}

const PracticalListCarouselCard = ({ card, number }: Props) => {
  const even = number % 2 === 0

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
        <div className={stls.title}>{card.title}</div>
        <div className={stls.text}>{card.text}</div>
      </div>
    </div>
  )
}

export default PracticalListCarouselCard
