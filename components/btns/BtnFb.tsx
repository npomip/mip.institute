import stls from '@/styles/components/btns/BtnFb.module.sass'
import { IconFb } from '@/components/icons'

const BtnFb = () => {
  return (
    <button className={stls.container}>
      <IconFb />
    </button>
  )
}

export default BtnFb
