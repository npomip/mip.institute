import stls from '@/styles/components/sections/Webinars.module.sass'
import { useMediaQuery } from 'react-responsive'
import Wrapper from '@/components/layout/Wrapper'
import SwiperContainer from '@/components/general/SwiperContainer'
import CardWebinar from '@/components/cards/CardWebinar'
import CardSchedule from '@/components/cards/CardSchedule'
import ImgPortrait1 from '@/components/imgs/webinars/ImgPortrait1'
import ImgPortrait2 from '@/components/imgs/webinars/ImgPortrait2'
import ImgPortrait3 from '@/components/imgs/webinars/ImgPortrait3'

const Webinars = () => {
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

  const webinarsSlides = webinars.map((data, idx) => (
    <CardWebinar key={data.topic + idx} webinarData={data} />
  ))

  const isMobileLayout = useMediaQuery({ query: '(max-width: 768px)' })

  if (!isMobileLayout) webinarsSlides.push(<CardSchedule />)

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ежедневные вебинары</h2>
        <p className={stls.desc}>
          С понедельника по четверг в институте проходят онлайн вебинары на
          самые актуальные темы и в удобном формате
        </p>
        <div className={stls.cards}>
          <SwiperContainer slides={webinarsSlides} desktopSlidesNum={4} />
        </div>
        {isMobileLayout && <CardSchedule mobileLayout />}
      </Wrapper>
    </section>
  )
}

export default Webinars
