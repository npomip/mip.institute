import stls from '@/styles/components/general/ProsList.module.sass'
import { IconCircleCheck } from '@/components/icons'

const ProsList = () => {
  const list = [
    'Самые востребованые направления',
    'Есть гос. аккредитация и сертификаты',
    'Помощь в трудоустройстве',
    'Онлайн обучение',
    'Дипломы котируются по всему миру',
    'Спикеры практики и имеют ученые степени'
  ]

  return (
    <div className={stls.container}>
      <ul className={stls.list}>
        {list.map((item, idx) => (
          <li key={item + idx} className={stls.item}>
            <div className={stls.icon}>
              <IconCircleCheck />
            </div>
            <span className={stls.text}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProsList
