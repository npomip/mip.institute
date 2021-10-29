import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { BtnClose } from '@/components/btns'

const PopupThankyou = ({ close }) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>Заявка отправлена</h3>
      <p className={stls.desc}>
        Мы свяжемся с Вами в рабочие часы в ближайшее время
      </p>
      <p className={stls.thanks}>Спасибо! 🎉 🎉</p>
    </div>
  )
}

export default PopupThankyou
