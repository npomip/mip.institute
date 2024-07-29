import stls from '@/styles/components/higherEducation/OneInfo.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import { IconCircleCheck } from '../icons'

const OneInfo = ({point}) => {
const {key, val} = point
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