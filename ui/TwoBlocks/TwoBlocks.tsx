import { ReactNode } from 'react'
import stls from './TwoBlocks.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  isRightViolet?: boolean
}
const TwoBlocks = ({ children, isRightViolet = false }: Props) => {
  return (
    <Wrapper>
      <div className={stls.container}>
        <div className={stls.leftBlock}>{children[0]}</div>
        <div
          className={classNames(stls.rightBlock, {
            [stls.violet]: isRightViolet
          })}>
          {children[1]}
        </div>
      </div>
    </Wrapper>
  )
}

export default TwoBlocks
