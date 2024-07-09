import stls from '@/styles/components/popups/PopupCta.module.sass'
import { FormAlpha } from '@/components/forms'
import { BtnClose } from '@/components/btns'

type Props = {
  title: string
  desc: string | JSX.Element
  cta: string
  promo?: boolean
  question?: boolean
  blockForAmo?: string
  close: any
  isActivePromocode?: string
}

const PopupCta = ({
  title,
  desc,
  cta,
  close,
  question = false,
  promo = false,
  blockForAmo = '',
  isActivePromocode
}: Props) => {
  return (
    <div className={stls.container}>
      <div className={stls.close}>
        <BtnClose onClick={close} iconCloseCircle />
      </div>
      <h3 className={stls.title}>{title}</h3>
      <p className={stls.desc}>{desc}</p>
      <div className={stls.form}>
        <FormAlpha
          isActivePromocode={isActivePromocode}
          promo={promo}
          cta={cta}
          question={question}
          popup={true}
          blockForAmo={blockForAmo}
        />
      </div>
    </div>
  )
}

export default PopupCta
