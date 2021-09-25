import stls from '@/styles/components/program/ProgramCost.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discount as discountStatic } from '@/data/price'

const ProgramCost = () => {
  const {
    program: { price, discount }
  } = useContext(ProgramContext)
  const rprice =
    price &&
    discount &&
    +price + (+price * (discount ? discount : discountStatic)) / 100

  return (
    <div className={stls.container}>
      <span className={stls.discount}>
        <span className={stls.bold}>{toNumberWithSpaces(price)}</span>{' '}
        <span className={stls.light}>&#8381;</span>
      </span>
      <span className={stls.regular}>
        <span className={stls.bold}>{toNumberWithSpaces(rprice)}</span>{' '}
        <span className={stls.light}>&#8381;</span>
      </span>
    </div>
  )
}

export default ProgramCost
