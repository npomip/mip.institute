import stls from '@/styles/components/program/BachelorProgramCost.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import toNumberWithSpaces from '@/helpers/toNumberWithSpaces'
import { discountNum } from '@/data/price'
import PopupTrigger from '../general/PopupTrigger'
import classNames from 'classnames'

const BachelorProgramCost = ({
  title,
  tagColor,
  bg,
  crossLineColor,
  violetBtn = false,
  orangeBtn = false,
  fullPrice,
  priceWithDiscount
}) => {
  const { program } = useContext(ContextStaticProps)

  const price = (program && program.price) || 0
  const discount = (program && program.discount) || discountNum

  const rprice =
    Math.round(Math.ceil((price / (100 - discount)) * 100) / 1000) * 1000
  // const rprice =
  // Math.round(Math.ceil((price / (100 - 40)) * 100) / 1000) * 1000

  const perMonthPrice = Math.round(Math.round(price && +price / 12) / 100) * 100
  const perMonthPriceRegular =
    Math.round(Math.round(rprice && +rprice / 12) / 100) * 100

  return (
    <div className={stls.container}>
      <div style={{ background: bg }} className={stls.content}>
        <p className={stls.title}>{title}</p>
        <p
          style={{ color: tagColor, border: `1px solid ${tagColor}` }}
          className={stls.tag}>
          Можно в рассрочку (при оплате стоимости обучения от 1 года)
        </p>
        <p className={stls.fullSemesterText}>
          Стоимость программы при оплате за семестр:
        </p>
        <span className={stls.fullPriceSemester}>
          <span>{toNumberWithSpaces(fullPrice / 2)}</span>
          {''}
          <span>&#8381;/семестр</span>
        </span>{' '}
        <p className={stls.yearDiscountText}>
          Стоимость со скидкой при оплате за год:
        </p>
        <div className={stls.flexMonth}>
          <span className={stls.regular}>
            <span className={stls.bold}>{toNumberWithSpaces(priceWithDiscount)}</span>{' '}
            <span className={stls.light}>&#8381;</span>
          </span>{' '}
          <span className={stls.regular}>
            <span className={stls.bold}>{toNumberWithSpaces(fullPrice)}</span>{' '}
            <span className={stls.light}>&#8381;</span>
            <span
              style={{ background: crossLineColor }}
              className={stls.line}></span>
          </span>
        </div>
        <div
          className={classNames({
            [stls.violetBtn]: violetBtn,
            [stls.orangeBtn]: orangeBtn
          })}>
          <PopupTrigger btn='alpha' cta='signUp' />
        </div>
      </div>
    </div>
  )
}

export default BachelorProgramCost
