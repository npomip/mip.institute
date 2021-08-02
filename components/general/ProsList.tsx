import stls from '@/styles/components/general/ProsList.module.sass'
import { IconCircleCheck } from '@/components/icons'

const ProsList = () => {
  const list = [
    '6 самых востребованых направлений',
    'Есть гос. аккредитация и сертификаты',
    'Помощь в трудоустройстве',
    'Онлайн и оффлайн мероприятия',
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
