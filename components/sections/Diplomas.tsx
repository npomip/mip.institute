import stls from '@/styles/components/sections/Diplomas.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import DiplomaExpandableItem from '@/components/general/DiplomaExpandableItem'
import diplomas from 'constants/diplomas'

type Props = {
  isOchuVoMip?: boolean
}
const Diplomas = ({ isOchuVoMip }: Props) => {
  const text = isOchuVoMip
    ? 'Мы производим обучение на основании государственной лицензии №6597 от 05.03.2024 (Номер в электронном реестре лицензий - Л035-00115-77/01215897). После окончания обучения в Московском Институте Психологии Вы получите диплом о высшем образовании и о квалификации, а также диплом о профессиональной переподготовке установленного образца с присвоением соответствующей квалификацией, дополнительный диплом от МИПа в формате А4 и международный диплом Supplement, которые можно добавить в портфолио психолога или предоставить работодателю.'
    : 'Мы производим обучение на основании государственной лицензии №041363 от 14.04.21 (Номер в электронном реестре лицензий - Л035-01298-77/00180046). После окончания обучения в Московском Институте Психологии Вы получите диплом о профессиональной переподготовке установленного образца Государством с присвоением соответствующей квалификацией, дополнительный диплом от МИПа в формате А4 и международный диплом Supplement, которые можно добавить в портфолиопсихолога или предоставить работодателю'

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          Выдаваемые дипломы <br />и сертификаты
        </h2>
        <p className={stls.p}>{text}</p>
        <ul className={stls.list}>
          {diplomas.map((item, idx) => (
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
