import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discount } from '@/data/price'
import classNames from 'classnames'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import ProgramDiscountUntil from './ProgramDiscountUntil'

type Props = {
  small?: boolean
  textOnly?: boolean
  violet?: boolean
  isWhite?: boolean
}

const ProgramDiscount = ({
  small = false,
  textOnly = false,
  violet = false,
  isWhite = false
}: Props) => {
  const { program } = useContext(ContextStaticProps)
  const programDiscount = program?.discount || 0

  // const elDiscount = <>{programDiscount ? `-${programDiscount}%` : discount}</>

  const elDiscount = <>{programDiscount ? `-${40}%` : 40}</>

  return (
    <>
      {textOnly ? (
        elDiscount
      ) : (
        <div
          className={classNames({
            [stls.container]: true,
            [stls.small]: small,
            [stls.violet]: violet,
            [stls.white]: isWhite
          })}>
          {violet ? (
            <div className={stls.forFlex}>
              <span className={stls.round}>●</span>
              <div className={stls.rightPart}>
                <p className={stls.discount}>{elDiscount}</p>
                <p className={stls.until}>
                  <ProgramDiscountUntil />
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className={stls.discount}>{elDiscount}</p>
              <p className={stls.until}>
                <ProgramDiscountUntil />
              </p>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ProgramDiscount
