import stls from '@/styles/components/btns/BtnYt.module.sass'
import { IconYt } from '@/components/icons'

const BtnYt = () => {
  return (
    <button className={stls.container}>
      <IconYt />
    </button>
  )
}

export default BtnYt
