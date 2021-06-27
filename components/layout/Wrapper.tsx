import stls from '@/styles/modules/layout/Wrapper.module.sass'
import classNames from 'classnames'

const Wrapper = ({ children }) => {
  return <div className={stls.container}>{children}</div>
}

export default Wrapper
