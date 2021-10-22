import stls from '@/styles/components/sections/PaymentInfo.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { number } from '@/data/contact'
import { email } from '@/data/email'

const PaymentInfo = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <ul className={stls.list}>
          <li className={stls.item}>
            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
            на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и
            передача информации осуществляется в защищённом режиме с
            использованием протокола шифрования SSL. В случае если Ваш банк
            поддерживает технологию безопасного проведения интернет-платежей
            Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для
            проведения платежа также может потребоваться ввод специального
            пароля
          </li>
          <li className={stls.item}>
            Настоящий сайт поддерживает 256-битное шифрование.
            Конфиденциальность сообщаемой персональной информации обеспечивается
            ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим
            лицам за исключением случаев, предусмотренных законодательством РФ.
            Проведение платежей по банковским картам осуществляется в строгом
            соответствии с требованиями платёжных систем МИР, Visa Int.,
            MasterCard Europe Sprl, JCB
          </li>
          <li className={stls.item}>
            В случае возврата, срок возврата составляет 30 дней с момента
            получения образовательных материалов. Возврат переведённых средств
            производится на Ваш банковский счёт в течение 5-30 рабочих дней
            (срок зависит от банка, который выдал Вашу банковскую карту)
          </li>
          <li className={stls.item}>
            В случае возникновения проблем с оплатой, свяжитесь с нами, в
            рабочие часы (09:00-19:00 МСК), по телефону{' '}
            <a href={number.href} className={stls.number}>
              number.val
            </a>
            , с помощью email{' '}
            <a href={email.href} className={stls.email}>
              {email.val}
            </a>{' '}
            или оставьте заявку, нажав на кнопку Помощь ниже
          </li>
          <li className={stls.item}>
            Пожалуйста, не забудьте указать ФИО и номер договора на странице с
            оплатой
          </li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default PaymentInfo
