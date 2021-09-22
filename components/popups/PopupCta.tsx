import stls from '@/styles/components/popups/PopupCta.module.sass'
import { BtnClose } from '@/components/btns'

const PopupCta = ({ title, desc, cta, close }) => {
  return (
    <div className={stls.container}>
      <BtnClose onClick={close} />
      <h3 className={stls.title}>{title}</h3>
      <p className={stls.desc}>{desc}</p>
    </div>
  )
}

export default PopupCta
