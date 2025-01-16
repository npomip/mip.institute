import loadIcon from '@/helpers/general/loadIcon'

const fourSteps = [
  {
    id: 1,
    icon: loadIcon('OneNumber'),
    title: 'Оставь заявку',
    subtitle:
      'Менеджер Приемной комиссии свяжется с Вами, уточнит все детали поступления и поможет оформить документы'
  },
  {
    id: 2,
    icon: loadIcon('TwoNumber'),
    title: 'Подтверди результаты ЕГЭ или пройди вступительные испытания',
    subtitle:
      'Все вступительные испытания проводятся дистанционно на нашей платформе, приезжать в Институт не потребуется'
  },
  {
    id: 3,
    icon: loadIcon('ThreeNumber'),
    title: 'Заключи договор ',
    subtitle:
      'Заключи договор на оказание платных образовательных услуг и оплати обучение'
  },
  {
    id: 4,
    icon: loadIcon('FourNumber'),
    title: 'Поздравляем!',
    subtitle:
      'Теперь ты студент Московского института психологии! Знакомься с куратором'
  }
]

export default fourSteps
