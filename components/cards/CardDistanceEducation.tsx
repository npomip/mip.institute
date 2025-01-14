import stls from '@/styles/components/cards/CardDistanceEducation.module.sass'
import classNames from 'classnames'
import loadIcon from '@/helpers/general/loadIcon'

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
      {loadIcon('IconCircleCheck', { distanceSection: true })}
      <div className={stls.description}>
        <span className={stls.p}>{item}</span>
      </div>
    </div>
  )
}

export default CardDistanceEducation
