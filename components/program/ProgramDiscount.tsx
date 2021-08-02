import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import discount from '@/data/price/discount'
import until from '@/data/price/until'
import classNames from 'classnames'

const ProgramDiscount = ({ small = null }) => {
  return (
    <div
      className={classNames({ [stls.container]: true, [stls.small]: small })}>
      <p className={stls.discount}>{discount}</p>
      <p className={stls.until}>{until}</p>
    </div>
  )
}

export default ProgramDiscount
