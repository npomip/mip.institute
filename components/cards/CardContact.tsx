import stls from '@/styles/components/cards/CardContact.module.sass'
import classNames from 'classnames'
import { IconLocation } from '../icons'

type CardContactType = {
  city: string
  street: string
  numbers: { href: string; val: string }[]
  email: { href: string; val: string }
}

const CardContact = ({ city, street, numbers, email }: CardContactType) => {
  return (
    <div className={stls.container}>
      <div className={stls.row}>
        <div className={stls.icon}>
          <IconLocation cbeta responsive />
        </div>
        <p className={stls.city}>{city}</p>
      </div>
      <div className={stls.row}>
        <p className={stls.street}>{street}</p>
      </div>
      <div className={classNames({ [stls.row]: true, [stls.numbers]: true })}>
        {numbers.map(number => (
          <p key={number.val}>
            <a href={number.href}>{number.val}</a>
          </p>
        ))}
      </div>
      <div className={stls.row}>
        <p className={stls.email}>
          <a href={email.href}>{email.val}</a>
        </p>
      </div>
    </div>
  )
}

export default CardContact
