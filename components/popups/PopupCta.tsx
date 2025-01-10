import stls from '@/styles/components/popups/PopupCta.module.sass'
import BtnClose from '@/components/btns/BtnClose'
import dynamic from 'next/dynamic'

const FormAlpha = dynamic(() => import('@/components/forms/FormAlpha'), {
  ssr: false
})

type Props = {
  title: string
  desc: string | JSX.Element
  cta: string
  promo?: boolean
  question?: boolean
  blockForAmo?: string
  close: any
  isActivePromocode?: string
  withGift?: boolean
}

const PopupCta = ({
  title,
  desc,
  cta,
  close,
  question = false,
  promo = false,
  blockForAmo = '',
  isActivePromocode,
  withGift
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
          withGift={withGift}
        />
      </div>
    </div>
  )
}

export default PopupCta
