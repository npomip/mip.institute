import stls from '@/styles/components/btns/BtnPhone.module.sass'
import { IconPhone } from '@/components/icons'
import { number } from '@/data/contact'

const BtnPhone = () => {
  return (
    <a href={number.href} className={stls.container}>
      <IconPhone />
    </a>
  )
}

export default BtnPhone
