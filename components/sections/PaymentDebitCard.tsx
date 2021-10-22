import stls from '@/styles/components/sections/PaymentDebitCard.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgOnlinePayment } from '@/components/imgs'

const PaymentDebitCard = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.left}>
          <h2 className={stls.title}>Банковской картой</h2>
          <p className={stls.p}>
            Для проведения оплаты обучения, с помощью банковской карты, ниже на
            этой странице необходимо нажать кнопку Оплата банковской картой.
            Оплата происходит через <strong>ПАО СБЕРБАНК</strong> с
            использованием банковских карт следующих платёжных систем:
          </p>
          <ul className={stls.list}>
            <li className={stls.item}>VISA International</li>
            <li className={stls.item}>Mastercard Worldwide</li>
            <li className={stls.item}>JCB</li>
            <li className={stls.item}>МИР</li>
          </ul>
        </div>
        <div className={stls.right}>
          <ImgOnlinePayment />
        </div>
      </Wrapper>
    </section>
  )
}

export default PaymentDebitCard
