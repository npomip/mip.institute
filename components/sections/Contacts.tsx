import stls from '@/styles/components/sections/Contacts.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { company } from '@/config/index'
import { city, cityAlmaty, street, streetAlmaty } from '@/data/location'
import { numberAlt, numberAlmaty, numberAlmatyAlt } from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'
import CardContact from '@/components/cards/CardContact'

const Contacts = () => {
  const cards = [
    {
      city,
      street,
      numbers: [company.phoneNumbers.default, numberAlt],
      email
    },
    {
      city: cityAlmaty,
      street: streetAlmaty,
      numbers: [numberAlmaty],
      email: emailAlmaty
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          {cards.map(({ city, street, numbers, email }) => (
            <div key={`${city} ${street}`} className={stls.card}>
              <CardContact
                city={city}
                street={street}
                numbers={numbers}
                email={email}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Contacts
