import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discountNum } from '@/data/price'
import classNames from 'classnames'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import ProgramDiscountUntil from './ProgramDiscountUntil'

type TypeProgramDiscount = {
  small?: boolean
  textOnly?: boolean
}

const ProgramDiscount = ({
  small = null,
  textOnly = null
}: TypeProgramDiscount) => {
  const { program } = useContext(ContextStaticProps)

  const discount = program?.discount || 0

  const elDiscount = <>{discount ? `-${discount}%` : discountNum}</>
  return (
    <>
      {textOnly ? (
        elDiscount
      ) : (
        <div
          className={classNames({
            [stls.container]: true,
            [stls.small]: small
          })}>
          <p className={stls.discount}>{elDiscount}</p>
          <p className={stls.until}>
            <ProgramDiscountUntil />
          </p>
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
