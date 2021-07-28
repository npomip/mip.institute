import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'
import classNames from 'classnames'

const BtnPhone = ({ withNumber = false }) => {
  return (
    <a
      href={number.href}
      className={classNames({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}>
      <IconPhone small={withNumber} /> {withNumber && number.val}
    </a>
  )
}

export default BtnPhone
