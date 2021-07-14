import stls from '@/styles/components/btns/BtnHumburger.module.sass'
import { IconHumburger } from '@/components/icons'
const BtnHumburger = () => {
  return (
    <button className={stls.container}>
      <IconHumburger />
    </button>
  )
}

export default BtnHumburger
