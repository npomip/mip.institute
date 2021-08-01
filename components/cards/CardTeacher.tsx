import stls from '@/styles/components/cards/CardTeacher.module.sass'

const CardTeacher = ({ photo, name, specialization, achievements }) => {
  return (
    <article className={stls.container}>
      <div className={stls.photoContainer}>{photo}</div>
      <div className={stls.infoContainer}>
        <h3 className={stls.name}>{name}</h3>
        <p className={stls.specialization}>{specialization}</p>
        <p className={stls.achievements}>{achievements}</p>
      </div>
    </article>
  )
}

export default CardTeacher
