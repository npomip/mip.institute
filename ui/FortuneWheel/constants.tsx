import stls from '@/ui/FortuneWheel/FortuneWheel.module.sass'
import NewYearGift from '@/components/icons/NewYearGift'
import IconNewYearStar from '@/components/icons/IconNewYearStar'
import classNames from 'classnames'

export const segmentsObject = [
  {
    text: '1 месяц супервизий',
    color: '#855EDF',
    value: 1,
    giftCode: 'promo6'
  },
  { text: 'Доп скидка 10%', color: '#FEA07B', value: 2, giftCode: 'promo5' },
  { text: 'Доп скидка 7%', color: '#855EDF', value: 2, giftCode: 'promo4' },
  { text: 'Доп скидка 5%', color: '#FEA07B', value: 3, giftCode: 'promo3' },
  {
    text: 'Пк в подарок \n(до 2 мес)',
    color: '#855EDF',
    value: 1,
    giftCode: 'promo7'
  },
  {
    text: 'Сертификат \nна 20 000 руб',
    color: '#FEA07B',
    value: 1,
    giftCode: 'promo8'
  },
  {
    text: 'Сертификат \nна 30 000 руб',
    color: '#855EDF',
    value: 1,
    giftCode: 'promo1'
  },
  { text: '1 семинар', color: '#FEA07B', value: 0, giftCode: 'promo2' } // Этот вариант исключён
]

export const icons = [
  { className: stls.smallGift, component: <NewYearGift /> },
  { className: stls.bigGift, component: <NewYearGift /> },
  { className: stls.biggestStar, component: <IconNewYearStar /> },
  {
    className: classNames(stls.mediumStarLeft, stls.lightColor),
    component: <IconNewYearStar />
  },
  { className: stls.mediumStarRight, component: <IconNewYearStar /> },
  {
    className: stls.lonelyStarRight,
    component: <IconNewYearStar />
  },
  {
    className: classNames(stls.smallStarRight, stls.lightColor),
    component: <IconNewYearStar />
  },
  {
    className: classNames(stls.smallStarLeft, stls.lightColor),
    component: <IconNewYearStar />
  },
  {
    className: classNames(stls.tinyStar, stls.lightColor),
    component: <IconNewYearStar />
  }
]
