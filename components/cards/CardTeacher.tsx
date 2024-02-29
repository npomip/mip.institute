import stls from '@/styles/components/cards/CardTeacher.module.sass'
import IconPortalViolet from '../icons/IconPortalViolet'

const CardTeacher = ({ portrait, name, achievements }) => {
  return (
    <article className={stls.container}>
      <div className={stls.innerContainer}>
        <div className={stls.twoColumns}>
          <div className={stls.leftBlock}>
            <div className={stls.portrait}>{portrait}</div>
            <h3 className={stls.name}>{name}</h3>
          </div>
          <div className={stls.rightBlock}>
            <p className={stls.achievements}>{achievements}</p>
            <div className={stls.experience}>
              <div className={stls.icon}>
                <IconPortalViolet />
              </div>
              <span>Опыт 10 лет</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardTeacher
