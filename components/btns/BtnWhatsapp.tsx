import stls from '@/styles/components/btns/BtnWhatsapp.module.sass'
import { IconWhatsapp } from '@/components/icons'
import classNames from 'classnames'

const BtnWhatsapp = ({ dark = false }) => {
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}
      aria-label='Whatsapp'>
      <IconWhatsapp />
    </button>
  )
}

export default BtnWhatsapp
