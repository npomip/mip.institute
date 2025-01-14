import {
  ImgHeadHunter,
  ImgMinistryOfLabor,
  ImgRosNeft,
  ImgRosSeti,
  ImgRZHD,
  ImgSberbankLeasing
} from '@/components/imgs/corporateClients'

const clientsList = [
  {
    name: 'HeadHunter',
    pic: <ImgHeadHunter name='HeadHunter' />
  },
  {
    name: 'РосСети',
    pic: <ImgRosSeti name='РосСети' />
  },
  {
    name: 'РосНефть',
    pic: <ImgRosNeft name='РосНефть' />
  },
  {
    name: 'РЖД',
    pic: <ImgRZHD name='РЖД' />
  },
  {
    name: 'Министерство труда',
    pic: <ImgMinistryOfLabor name='Министерство труда' />
  },
  {
    name: 'Сбербанк Лизинг',
    pic: <ImgSberbankLeasing name='Сбербанк Лизинг' />
  }
]

export default clientsList
