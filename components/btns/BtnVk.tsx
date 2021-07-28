import stls from '@/styles/components/btns/BtnVk.module.sass'
import { IconVk } from '@/components/icons'
import classNames from 'classnames'

const BtnVk = ({ mlzero }) => {
  return (
    <button
      className={classNames({ [stls.container]: true, [stls.mlzero]: mlzero })}>
      <IconVk />
    </button>
  )
}

export default BtnVk
