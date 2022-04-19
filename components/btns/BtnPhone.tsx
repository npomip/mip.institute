import stls from '@/styles/components/btns/BtnPhone.module.sass'
import cn from 'classnames'
import { company } from '@/config/index'
import { IconPhone } from '@/components/icons'

const BtnPhone = ({ withNumber = false }) => {
  return (
    <a
      href={company.phoneNumbers.default.href}
      className={cn({
        [stls.container]: true,
        [stls.withNumber]: withNumber
      })}
      aria-label='Позвонить'>
      <IconPhone small={withNumber} />{' '}
      {withNumber && company.phoneNumbers.default.val}
    </a>
  )
}

export default BtnPhone
