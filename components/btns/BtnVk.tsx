import stls from '@/styles/components/btns/BtnVk.module.sass'
import { IconVk } from '@/components/icons'
import classNames from 'classnames'

const BtnVk = ({ mlzero = false, dark = false }) => {
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.mlzero]: mlzero,
        [stls.dark]: dark
      })}>
      <IconVk />
    </button>
  )
}

export default BtnVk
