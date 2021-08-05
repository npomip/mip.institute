import stls from '@/styles/components/btns/BtnYt.module.sass'
import { IconYt } from '@/components/icons'
import classNames from 'classnames'

const BtnYt = ({ dark = false }) => {
  return (
    <button
      className={classNames({ [stls.container]: true, [stls.dark]: dark })}
      aria-label='YouTube'>
      <IconYt />
    </button>
  )
}

export default BtnYt
