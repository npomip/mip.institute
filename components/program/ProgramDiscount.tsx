import stls from '@/styles/components/program/ProgramDiscount.module.sass'
import { discount } from '@/data/price'
import classNames from 'classnames'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import ProgramDiscountUntil from './ProgramDiscountUntil'
import Popup from 'reactjs-popup'
import IconInfoOrange from '../icons/IconInfoOrange'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'

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
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const elDiscount = (
    <>{programDiscount ? `до -${programDiscount}%` : discount}</>
  )

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
              <Popup
                trigger={
                  <button
                    className={stls.info}
                    aria-label='Информация о скидках'>
                    <IconInfoOrange />
                  </button>
                }
                position='top left'
                on={isMobileAndTabletLayout ? 'click' : 'hover'}
                closeOnDocumentClick
                arrow={false}
                contentStyle={{
                  boxShadow: 'none'
                }}>
                <div className={stls.tooltip}>
                  <div className={stls.icon}>
                    <IconInfoOrange />
                  </div>
                  Информацию о скидках и дополнительных бонусах при поступлении
                  уточняйте у менеджеров приемной комиссии
                </div>
              </Popup>
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
