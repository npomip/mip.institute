import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discount as discountStatic, until } from '@/data/price'
import classNames from 'classnames'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'

const ProgramDiscount = ({ small = null }) => {
  const {
    program: { discount }
  } = useContext(ProgramContext)
  return (
    <div
      className={classNames({ [stls.container]: true, [stls.small]: small })}>
      <p className={stls.discount}>
        {discount ? `-${discount}%` : discountStatic}
      </p>
      <p className={stls.until}>{until}</p>
    </div>
  )
}

export default ProgramDiscount
