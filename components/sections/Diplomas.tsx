import stls from '@/styles/components/sections/Diplomas.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import DiplomaExpandableItem from '@/components/general/DiplomaExpandableItem'

const Diplomas = () => {
  const list = [
    {
      title: 'Профессия',
      diplomas: [
        {
          image: <>this is an image</>,
          title: 'string'
        }
      ]
    },
    {
      title: 'Курс',
      diplomas: [
        {
          image: <>this is an image</>,
          title: 'string'
        },
        {
          image: <>this is an image 2</>,
          title: 'string 2'
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
          После окончания обучения в Moscow Business Academy Вы получите диплом
          о профессиональной переподготовке установленного образца, диплом
          академии и международный диплом Supplement, которые можно добавить в
          портфолио и показать работодателю.
        </p>
        <ul className={stls.list}>
          {list.map((item, idx) => (
            <DiplomaExpandableItem
              key={item.title + idx}
              title={item.title}
              diplomas={item.diplomas}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default Diplomas
