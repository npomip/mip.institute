import stls from '@/styles/components/layout/TwoColumns.module.sass'
import classNames from 'classnames'


const TwoColumns = ({ children, slidable = false, isBachelorPage = false }) => {
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.slidable]: slidable,
        [stls.bachelorContainer]: isBachelorPage,
      })}>
      {children}
    </div>
  )
}

export default TwoColumns
