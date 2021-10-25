import stls from '@/styles/components/program/ProgramCost.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discount as discountStatic } from '@/data/price'

const ProgramCost = ({ withPerMonth = false }) => {
  const {
    program: { price, discount }
  } = useContext(ProgramContext)
  const rprice =
    price &&
    discount &&
    +price + (+price * (discount ? discount : discountStatic)) / 100

  const perMonthPrice = +price && price / 12
  const perMonthRPrice = rprice && rprice / 12

  return (
    <div className={stls.container}>
      {withPerMonth && (
        <div className={stls.content}>
          <p className={stls.label}>Беспроцентная рассрочка</p>
          <span className={stls.discount}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthPrice)}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>
          <span className={stls.regular}>
            <span className={stls.bold}>
              {toNumberWithSpaces(perMonthRPrice)}
            </span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>
        </div>
      )}
      <div className={stls.content}>
        <p className={stls.label}>Одноразовый платёж</p>
        <span className={stls.discount}>
          <span className={stls.bold}>{toNumberWithSpaces(price)}</span>{' '}
          <span className={stls.light}>&#8381;</span>
        </span>
        <span className={stls.regular}>
          <span className={stls.bold}>{toNumberWithSpaces(rprice)}</span>{' '}
          <span className={stls.light}>&#8381;</span>
        </span>
      </div>
    </div>
  )
}

export default ProgramCost
