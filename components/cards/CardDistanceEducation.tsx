import stls from '@/styles/components/cards/CardDistanceEducation.module.sass'
import { IconCircleCheck } from '../icons'
import classNames from 'classnames'

type Props = {
  item: string
  purpleBlock?: boolean
}

const CardDistanceEducation = ({ item, purpleBlock }: Props) => {
  return (
    <div
      className={classNames({
        [stls.item]: true,
        [stls.purpleBlock]: purpleBlock
      })}>
      <IconCircleCheck distanceSection />
      <div className={stls.description}>
        <span className={stls.p}>{item}</span>
      </div>
    </div>
  )
}

export default CardDistanceEducation
