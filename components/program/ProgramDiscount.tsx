import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import discount from '@/data/price/discount'
import until from '@/data/price/until'

const ProgramDiscount = () => {
  return (
    <div className={stls.container}>
      <p className={stls.discount}>{discount}</p>
      <p className={stls.until}>{until}</p>
    </div>
  )
}

export default ProgramDiscount
