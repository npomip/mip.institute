import stls from '@/styles/components/sections/PaymentBtns.module.sass'
import Wrapper from '@/ui/Wrapper'
import { BtnAlpha } from '@/components/btns'
import PopupTrigger from '@/ui/PopupTrigger'
import Popup from 'reactjs-popup'
import { useState } from 'react'
import PopupThankyouNew from '../popups/PopupThankyouNew'

const PaymentBtns = () => {
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.btns}>
          <div className={stls.btn}>
            <BtnAlpha
              text='Оплата банковской картой'
              href='https://securepayments.sberbank.ru/shortlink/MAViQpOW'
              target='_blank'
            />
          </div>
          <div className={stls.btn}>
            <PopupTrigger btn='delta' cta='help' />
          </div>
          <button onClick={() => setThanksIsOpen(true)}>открыть попап</button>
          <Popup
            open={thanksIsOpen}
            closeOnDocumentClick
            onClose={() => setThanksIsOpen(false)}>
            <PopupThankyouNew close={() => setThanksIsOpen(false)} />
          </Popup>
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentBtns
