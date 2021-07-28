import stls from '@/styles/components/sections/Webinars.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import TwoColumns from '@/components/layout/TwoColumns'
import WebinarCard from '@/components/general/WebinarCard'
import ScheduleCard from '@/components/general/ScheduleCard'
import ImgPortrait1 from '@/components/imgs/webinars/ImgPortrait1'
import ImgPortrait2 from '@/components/imgs/webinars/ImgPortrait2'
import ImgPortrait3 from '@/components/imgs/webinars/ImgPortrait3'

const webinars = [
  {
    date: {
      day: '28',
      month: 'сент.',
      time: '20:00',
      weekday: 'Понедельник'
    },
    name: 'Светлана Сергеева',
    photo: <ImgPortrait1 />,
    topic: 'Семейная психология',
    bgColor: 'cepsilon'
  },
  {
    date: {
      day: '14',
      month: 'сент.',
      time: '13:00',
      weekday: 'Вторник'
    },
    name: 'Селиванов Иван',
    photo: <ImgPortrait2 />,
    topic: 'Кризисный психолог',
    bgColor: 'csigma',
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
    photo: <ImgPortrait3 />,
    topic: 'Психоанализ и психологическое консультирование',
    bgColor: 'cpi'
  }
]

const Webinars = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ежедневные вебинары</h2>
        <p className={stls.desc}>
          С понедельника по четверг в институте проходят онлайн вебинары на
          самые актуальные темы и в удобном формате
        </p>
        <TwoColumns>
          <div className={stls.cards}>
            {webinars.map((data, idx) => (
              <WebinarCard key={data.topic + idx} webinarData={data} />
            ))}
            <ScheduleCard />
          </div>
          <ScheduleCard mobileLayout />
        </TwoColumns>
      </Wrapper>
    </section>
  )
}

export default Webinars
