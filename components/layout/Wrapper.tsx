import stls from '@/styles/modules/layout/Wrapper.module.sass'
import classNames from 'classnames'

const Wrapper = ({ children, flex = false }) => {
  return (
    <div className={classNames({ [stls.container]: true, [stls.flex]: flex })}>
      {children}
    </div>
  )
}

export default Wrapper
