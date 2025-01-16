import stls from './CtaText.module.sass'
import classNames from 'classnames'
import loadIcon from '@/helpers/general/loadIcon'

type Props = {
  text: string
  cbeta?: boolean
  cnu?: boolean
  ctheta?: boolean
  dimmer?: boolean
  arrowBottom?: boolean
}

const CtaText = ({
  text,
  cbeta = false,
  cnu = false,
  ctheta = false,
  dimmer = false,
  arrowBottom = false
}: Props) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.ctheta]: ctheta,
        [stls.dimmer]: dimmer,
        [stls.arrowBottom]: arrowBottom
      })}>
      <span className={stls.text}>{text}</span>{' '}
      <span className={stls.icon}>
        {loadIcon('IconMoreThan', {
          cnu: cnu,
          ctheta: ctheta,
          dimmer: dimmer,
          cbeta: cbeta
        })}
      </span>
    </span>
  )
}

export default CtaText
