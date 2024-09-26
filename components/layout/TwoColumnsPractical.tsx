import stls from '@/styles/components/layout/TwoColumnsPractical.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bigLeft?: boolean
  leftViolet?: boolean
  rightViolet?: boolean
  fixHeight?: boolean
  isMobileReversed?: boolean
}

const TwoColumnsPractical = ({
  children,
  bigLeft = false,
  leftViolet = false,
  rightViolet = false,
  fixHeight = false,
  isMobileReversed = false
}: Props) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.fixHeight]: fixHeight,
        [stls.reversed]: isMobileReversed
      })}>
      <div
        className={classNames({
          [stls.leftColumn]: true,
          [stls.isViolet]: leftViolet
        })}
        style={{ flexBasis: bigLeft ? '65%' : '35%' }}>
        {children[0]}
      </div>
      <div
        className={classNames({
          [stls.rightColumn]: true,
          [stls.isViolet]: rightViolet
        })}
        style={{ flexBasis: bigLeft ? '35%' : '65%' }}>
        {children[1]}
      </div>
    </div>
  )
}

export default TwoColumnsPractical
