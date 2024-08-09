import stls from '@/styles/components/btns/BtnBeta.module.sass'
import classNames from 'classnames'

type Props = {
  text: string
  isDisabled?: boolean
}

const BtnBeta = ({ text = '', isDisabled = false }: Props) => {
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

export default BtnBeta
