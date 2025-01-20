import stls from '@/styles/components/btns/BtnYt.module.sass'
import { routes } from '@/config/index'
import loadIcon from '@/helpers/general/loadIcon'

import classNames from 'classnames'

const BtnYt = ({ dark = false }) => {
  return (
    <a
      className={classNames({ [stls.container]: true, [stls.dark]: dark })}
      href={routes.external.youtube}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='YouTube'>
      {loadIcon('IconYt')}
    </a>
  )
}

export default BtnYt
