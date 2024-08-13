import stls from '@/styles/components/general/CtaText.module.sass'
import classNames from 'classnames'
import { IconMoreThan } from '@/components/icons'

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
        <IconMoreThan cbeta={cbeta} cnu={cnu} ctheta={ctheta} dimmer={dimmer} />
      </span>
    </span>
  )
}

export default CtaText
