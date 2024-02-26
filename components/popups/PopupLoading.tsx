import stls from '@/styles/components/popups/PopupProgram.module.sass'
import Link from 'next/link'
import ForPopup from '../imgs/general/ForPopup'


const PopupLoading = () => {

  return (
    <div className={stls.container}>
      <p>Отправляем форму</p>
    </div>
  )
}

export default PopupLoading