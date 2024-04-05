import stls from '@/styles/components/btns/BtnGamma.module.sass'
import classNames from 'classnames'

const BtnGamma = ({ text = '', test=false }) => {
  return <button className={classNames({
    [stls.container]: !test,
    [stls.test]: test,
  })}
    >{text}</button>
}

export default BtnGamma
