import stls from './TwoColumns.module.sass'
import classNames from 'classnames'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  slidable?: boolean
  isBachelorPage?: boolean
}

const TwoColumns = ({
  children,
  slidable = false,
  isBachelorPage = false
}: Props) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.slidable]: slidable,
        [stls.bachelorContainer]: isBachelorPage
      })}>
      {children}
    </div>
  )
}

export default TwoColumns
