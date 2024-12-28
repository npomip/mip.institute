import stls from './OneInfo.module.sass'
import { IconCircleCheck } from '@/components/icons'
import { Point } from '../BachelorProgramInfo'

type Props = {
  point: Point
}

const OneInfo = ({ point }: Props) => {
  const { key, val } = point
  return (
    <div className={stls.point}>
      <div className={stls.icon}>
        <IconCircleCheck violetItems />
      </div>
      <p className={stls.key}>{key}</p>
      <p>{val}</p>
    </div>
  )
}

export default OneInfo
