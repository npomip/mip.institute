import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import classNames from 'classnames'

const BtnAlpha = ({ text = '', isDisabled }) => {
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.isDisabled]: isDisabled
      })}
      disabled={isDisabled}>
      {text}
    </button>
  )
}

export default BtnAlpha
