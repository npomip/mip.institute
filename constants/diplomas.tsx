import {
  ImgCertificate,
  ImgCertificateAlt,
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement
} from '@/components/imgs/diplomas'

const diplomas = [
  {
    title: 'Профессия',
    diplomas: [
      {
        image: <ImgDiploma />,
        title: 'Диплом института'
      },
      { image: <ImgDiplomaAlt />, title: 'Диплом установленного образца' },
      { image: <ImgSupplement />, title: 'Саплемент' }
    ]
  },
  {
    title: 'Курс',
    diplomas: [
      {
        image: <ImgCertificate />,
        title: 'Сертификат института'
      },
      {
        image: <ImgCertificateAlt />,
        title: 'Удостоверение института'
      }
    ]
  }
]

export default diplomas
