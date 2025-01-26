import stls from './ValueCard.module.sass'

interface Props {
  id: number
  title: string
  description: string
}

const Values = (card: Props) => {
  return (
    <div className={stls.card}>
      <div className={stls.cardHeader}>
        <span className={stls.number}>{card.id}</span>
        <span className={stls.cardTitle}>{card.title}</span>
      </div>
      <span className={stls.cardDescription}>{card.description}</span>
    </div>
  )
}

export default Values
