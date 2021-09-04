import stls from '@/styles/components/btns/BtnProgramsField.module.sass'
import { IconMoreThan } from '@/components/icons'

const BtnProgramsField = () => {
  return (
    <button className={stls.container}>
      <span>Все направления</span>
      <IconMoreThan cnu />
    </button>
  )
}

export default BtnProgramsField
