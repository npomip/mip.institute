import stls from '@/styles/components/sections/Webinars.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import WebinarCard from '@/components/general/WebinarCard'
import ScheduleCard from '@/components/general/ScheduleCard'
import speaker1 from '@/public/assets/imgs/general/speaker-1.jpg'
import speaker2 from '@/public/assets/imgs/general/speaker-2.jpg'
import speaker3 from '@/public/assets/imgs/general/speaker-3.jpg'

const webinarsList = [
  {
    date: {
      day: '28',
      month: 'сент.',
      time: '20:00',
      weekday: 'Понедельник'
    },
    name: 'Светлана Сергеева',
    photo: speaker1,
    topic: 'Семейная психология',
    bgColor: 'lightViolet'
  },
  {
    date: {
      day: '14',
      month: 'сент.',
      time: '13:00',
      weekday: 'Вторник'
    },
    name: 'Селиванов Иван',
    photo: speaker2,
    topic: 'Кризисный психолог',
    bgColor: 'lightGreen',
    hex: '#F5FCFE'
  },
  {
    date: {
      day: '12',
      month: 'сент.',
      time: '20:00',
      weekday: 'Понедельник'
    },
    name: 'Сухарев Марк',
    photo: speaker3,
    topic: 'Психоанализ и психологическое консультирование',
    bgColor: 'lightOrange'
  }
]

const Webinars = () => {
  return (
    <Wrapper>
      <section className={stls.container}>
        <h2 className={stls.title}>Ежедневные вебинары</h2>
        <p className={stls.desc}>
          С понедельника по четверг в институте проходят онлайн вебинары на
          самые актуальные темы и в удобном формате
        </p>
        <TwoColumns>
          <div className={stls.cards}>
            {webinarsList.map((data, idx) => (
              <WebinarCard key={data.topic + idx} webinarData={data} />
            ))}
            <ScheduleCard />
          </div>
          <ScheduleCard mobileLayout />
        </TwoColumns>
      </section>
    </Wrapper>
  )
}

export default Webinars
