import stls from '@/styles/components/btns/BtnTelegram.module.sass'
import { IconTelegram } from '@/components/icons'
import classNames from 'classnames'

const BtnTelegram = ({ dark = false }) => {
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}>
      <IconTelegram />
    </button>
  )
}

export default BtnTelegram
