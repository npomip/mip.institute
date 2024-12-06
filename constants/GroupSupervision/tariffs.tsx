import tariff1 from '@/public/assets/imgs/groupSupervision/Tariffs/tariff1.png'
import tariff2 from '@/public/assets/imgs/groupSupervision/Tariffs/tariff2.png'
import tariff3 from '@/public/assets/imgs/groupSupervision/Tariffs/tariff3.png'

const tariffs = [
  {
    image: tariff1,
    title: 'стартовый (1 мес)',
    people: 25,
    price: 7900,
    isDisabled: false
  },
  {
    image: tariff2,
    title: 'оптимальный (5 мес)',
    people: 25,
    price: 35000,
    isDisabled: false
  },
  {
    image: tariff3,
    title: 'мини-группа',
    people: 6,
    price: 12000,
    isDisabled: true
  }
]

export default tariffs
