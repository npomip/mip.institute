import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import classNames from 'classnames'

interface Props {
  text: string
  isDisabled?: boolean
  href?: any
  target?: string | null
  onClick?: () => void
}

const BtnAlpha = ({
  text,
  isDisabled = false,
  href = null,
  target = null,
  onClick
}: Props) => {
  return (
    <>
      {href ? (
        <a
          className={classNames({
            [stls.container]: true
          })}
          href={href}
          target={target}
          rel={target && 'noopener noreferrer'}>
          {text}
        </a>
      ) : (
        <button
          className={classNames({
            [stls.container]: true,
            [stls.isDisabled]: isDisabled
          })}
          disabled={isDisabled}
          onClick={onClick}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
