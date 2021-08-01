import stls from '@/styles/components/sections/YourResume.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ImgResume1 } from '@/components/imgs'

const YourResume = () => {
  const list = [
    'Базовые психологические знания и практический опыт',
    'Опыт для дальнейшего профессионального самоопределения и формирования',
    'Базовые психологические знания и практический опыт',
    'Опыт для дальнейшего профессионального самоопределения и формирования',
    'Базовые психологические знания и практический опыт',
    'Базовые психологические знания и практический опыт',
    'Опыт для дальнейшего профессионального самоопределения и формирования',
    'Базовые психологические знания и практический опыт',
    'Опыт для дальнейшего профессионального самоопределения и формирования'
  ]

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Ваше резюме после обучения</h2>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.img}>
              <ImgResume1 />
            </div>
            <div className={stls.headings}>
              <div className={stls.heading}>
                <p className={stls.p}>Форма обучения:</p>
                <h3 className={stls.h3}>Семейный психолог</h3>
              </div>
              <div className={stls.heading}>
                <p className={stls.p}>Зарплата от:</p>
                <h3 className={stls.h3}>80 000 р</h3>
              </div>
            </div>
          </div>
          <ul className={stls.list}>
            {list.map((item, idx) => (
              <li key={item + idx} className={stls.item}>
                <p className={stls.itemText}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default YourResume
