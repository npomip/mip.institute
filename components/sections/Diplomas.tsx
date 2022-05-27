import stls from '@/styles/components/sections/Diplomas.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import DiplomaExpandableItem from '@/components/general/DiplomaExpandableItem'
import {
  ImgDiploma,
  ImgDiplomaAlt,
  ImgSupplement,
  ImgCertificate,
  ImgCertificateAlt
} from '@/components/imgs'

const Diplomas = () => {
  const list = [
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
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Выдаваемые дипломы <br />и сертификаты
        </h2>
        <p className={stls.p}>
          Мы производим обучение на основании государственной лицензии №041221.
          После окончания обучения в Московском Институте Психологии Вы получите
          диплом о профессиональной переподготовке установленного образца,
          диплом института и международный диплом Supplement, которые можно
          добавить в портфолио и показать работодателю
        </p>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <DiplomaExpandableItem
              key={item.title + idx}
              title={item.title}
              diplomas={item.diplomas}
              idx={idx}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Diplomas
