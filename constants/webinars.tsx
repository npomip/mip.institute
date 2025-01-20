import {
  ImgPortrait1,
  ImgPortrait2,
  ImgPortrait3
} from '@/components/imgs/webinars'

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

export default webinars
