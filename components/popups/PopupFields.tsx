import stls from '@/styles/components/popups/PopupFields.module.sass'
import BtnClose from '@/components/btns/BtnClose'
import ProgramsFilters from '@/components/program/ProgramsFilters'

type Props = {
  close: () => void
}

const PopupFields = ({ close }: Props) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} />
      </div>
      <div className={stls.filters}>
        <ProgramsFilters />
      </div>
    </div>
  )
}

export default PopupFields
