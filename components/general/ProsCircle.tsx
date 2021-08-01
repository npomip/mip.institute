import stls from '@/styles/components/general/ProsCircle.module.sass'
import { IconLogoAlt } from '@/components/icons'

const ProsCircle = () => {
  return (
    <div className={stls.container}>
      <div className={stls.circle}>
        <div className={stls.row}>
          <div className={stls.text}>
            <h3 className={stls.subTitle}>ТОП 3</h3>
            <p className={stls.p}>
              Входим в тройку лучших по направлению психология
            </p>
          </div>
        </div>

        <div className={stls.row}>
          <div className={stls.text}>
            <h3 className={stls.subTitle}>15 лет</h3>
            <p className={stls.p}>На рынке образования</p>
          </div>
          <div className={stls.icon}>
            <IconLogoAlt />
          </div>
          <div className={stls.text}>
            <h3 className={stls.subTitle}>2000+</h3>
            <p className={stls.p}>Студентов уже обучили</p>
          </div>
        </div>

        <div className={stls.row}>
          <div className={stls.text}>
            <h3 className={stls.subTitle}>80 т.р.</h3>
            <p className={stls.p}>Средняя зарплата наших выпускников</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProsCircle
