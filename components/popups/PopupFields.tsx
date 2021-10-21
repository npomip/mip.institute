import stls from '@/styles/components/popups/PopupFields.module.sass'
import { BtnClose } from '@/components/btns'
import ProgramsFilters from '@/components/layout/ProgramsFilters'

const PopupFields = ({ ofType, close }) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <ProgramsFilters close={close} ofType={ofType} />
    </div>
  )
}

export default PopupFields
