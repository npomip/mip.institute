import stls from '@/styles/components/sections/Contacts.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { city, cityAlmaty, street, streetAlmaty } from '@/data/location'
import {
  number,
  numberAlt,
  numberAlmaty,
  numberAlmatyAlt
} from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'
import CardContact from '../cards/CardContact'

const Contacts = () => {
  const cards = [
    {
      city,
      street,
      numbers: [number, numberAlt],
      email
    },
    {
      city: cityAlmaty,
      street: streetAlmaty,
      numbers: [numberAlmaty, numberAlmatyAlt],
      email: emailAlmaty
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          {cards.map(({ city, street, numbers, email }) => (
            <CardContact
              key={`${city} ${street}`}
              city={city}
              street={street}
              numbers={numbers}
              email={email}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Contacts
