import stls from '@/styles/components/popups/BachelorFullProgramPopup.module.sass'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'
import Link from 'next/link'

const BachelorFullProgramPopup = ({content, close=null}) => {
  return (
    <div className={stls.container}>
      <button onClick={close}>Закрыть окно X</button>
      <p>{content}</p>
    </div>
  )
}

export default BachelorFullProgramPopup