import stls from '@/styles/components/btns/BtnVk.module.sass'
import { routes } from '@/config/index'
import classNames from 'classnames'
import loadIcon from '@/helpers/general/loadIcon'

const BtnVk = ({ mlzero = false, dark = false }) => {
  return (
    <a
      className={classNames({
        [stls.container]: true,
        [stls.mlzero]: mlzero,
        [stls.dark]: dark
      })}
      href={routes.external.vk}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='VK'>
      {loadIcon('IconVk')}
    </a>
  )
}

export default BtnVk
