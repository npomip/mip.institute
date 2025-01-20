import stls from '@/styles/components/btns/BtnWhatsapp.module.sass'
import { routes } from '@/config/index'
import classNames from 'classnames'
import loadIcon from '@/helpers/general/loadIcon'

const BtnWhatsapp = ({ dark = false }) => {
  return (
    <a
      className={classNames({
        [stls.container]: true,
        [stls.dark]: dark
      })}
      href={routes.external.whatsapp}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Whatsapp'>
      {loadIcon('IconWhatsapp')}
    </a>
  )
}

export default BtnWhatsapp
