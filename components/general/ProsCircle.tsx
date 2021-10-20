import stls from '@/styles/components/general/ProsCircle.module.sass'
import { IconLogoAlt, IconBgCircle } from '@/components/icons'

const ProsCircle = () => {
  return (
    <div className={stls.container}>
      <IconBgCircle />
      <div className={stls.center}>
        <IconLogoAlt responsive />
      </div>
      <div className={stls.top}>
        <h3 className={stls.subTitle}>ТОП 3</h3>
        <p className={stls.p}>
          Входим в тройку лучших по направлению психология
        </p>
      </div>
      <div className={stls.right}>
        <h3 className={stls.subTitle}>2000+</h3>
        <p className={stls.p}>Студентов уже обучили</p>
      </div>
      <div className={stls.bottom}>
        <h3 className={stls.subTitle}>90 т.р.</h3>
        <p className={stls.p}>Средняя зарплата наших выпускников</p>
      </div>
      <div className={stls.left}>
        <h3 className={stls.subTitle}>15 лет</h3>
        <p className={stls.p}>На рынке образования</p>
      </div>
    </div>
  )
}

export default ProsCircle
