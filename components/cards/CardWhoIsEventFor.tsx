import stls from '@/styles/components/cards/CardWhoIsEventFor.module.sass'
import classNames from 'classnames'
import IconStarRatingCard from '../icons/IconStarRatingCard'
import { WhoIsEventFor } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import IconOctopus from '../icons/IconOctopus'
import { url } from 'inspector'

type Props = {
  card: WhoIsEventFor
}

const CardWhoIsEventFor = ({ card }: Props) => {
  return (
    <div
      className={stls.container}
      style={{ backgroundImage: `url(${card.picture.src})` }}>
      <div className={stls.corners}>
        <div className={stls.icon}>
          <IconOctopus />
        </div>
      </div>
      <div className={stls.textBlock}>
        <p className={stls.text}>{card.text}</p>
      </div>
    </div>
  )
}

export default CardWhoIsEventFor
