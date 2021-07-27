import stls from '@/styles/components/layout/TwoColumns.module.sass'
import classNames from 'classnames'

const TwoColumns = ({ slider = false, children }) => {
  return (
    <div className={classNames(stls.container, { [stls.scrollable]: slider })}>
      {children}
    </div>
  )
}

export default TwoColumns
