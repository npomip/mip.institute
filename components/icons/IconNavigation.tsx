import stls from '@/styles/components/icons/IconNavigation.module.sass'
import parse from 'html-react-parser'
import classNames from 'classnames'
const IconNavigation = ({children, hover}) => {
  return (
    <span 
    className={classNames(
      stls.container,
      {[stls.hover]: hover} 
  )}>
      {parse(children)}
    </span>
  )
}

export default IconNavigation
