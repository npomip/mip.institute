import stls from '@/styles/components/btns/BtnProgramFields.module.sass'
import { IconMoreThan } from '@/components/icons'

const BtnProgramFields = () => {
  return (
    <button className={stls.container}>
      <span>Все направления</span>
      <IconMoreThan cnu />
    </button>
  )
}

export default BtnProgramFields
