import stls from '@/styles/components/btns/BtnVk.module.sass'
import { IconVk } from '@/components/icons'

const BtnVk = () => {
  return (
    <button className={stls.container}>
      <IconVk />
    </button>
  )
}

export default BtnVk
