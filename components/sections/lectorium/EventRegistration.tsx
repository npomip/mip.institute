import stls from '@/styles/components/sections/lectorium/EventRegistration.module.sass'
import TwoBlocks from '@/ui/TwoBlocks'
import Countdown from './Countdown'
import EventPaymentForm from '@/components/forms/EventPaymentForm'

const EventRegistration = ({}) => {
  return (
    <section className={stls.section}>
      <TwoBlocks>
        <div className={stls.form}>
          <h2 className={stls.title}>
            <span className={stls.colouredTitle}>Оставьте</span> заявку на
            мероприятие
          </h2>
          <EventPaymentForm />
        </div>
        <Countdown />
      </TwoBlocks>
    </section>
  )
}

export default EventRegistration
