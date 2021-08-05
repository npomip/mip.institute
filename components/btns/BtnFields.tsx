import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'

const BtnFields = () => {
  return (
    <button className={stls.container}>
      <div className={stls.icon}>
        <IconMenu />
      </div>
      <span className={stls.text}>Направления обучения</span>
    </button>
  )
}

export default BtnFields
