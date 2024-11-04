import stls from '@/styles/components/sections/lectorium/EventRegistration.module.sass'
import TwoBlocks from '@/ui/TwoBlocks'
import Countdown from './Countdown'
import EventPaymentForm from '@/components/forms/EventPaymentForm'
import Wrapper from '@/ui/Wrapper'

type Props = {
  targetDate: string
  timepadHref: string
}

const EventRegistration = ({ targetDate, timepadHref }: Props) => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <TwoBlocks>
          <div className={stls.form}>
            <h2 className={stls.title}>
              <span className={stls.colouredTitle}>Оставьте</span> заявку на
              мероприятие
            </h2>
            <EventPaymentForm timepadHref={timepadHref} />
          </div>
          <Countdown targetDate={targetDate} />
        </TwoBlocks>
      </Wrapper>
    </section>
  )
}

export default EventRegistration
