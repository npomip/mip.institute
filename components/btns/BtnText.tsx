import stls from '@/styles/components/btns/BtnText.module.sass'
import { IconMoreThan } from '@/components/icons'
import classNames from 'classnames'

const BtnText = ({ text = '', cbeta = true, cnu = false, dimmer = false }) => {
  if (cnu === true) cbeta = false
  return (
    <button
      className={classNames({
        [stls.container]: true,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.dimmer]: dimmer
      })}>
      <span className={stls.text}>{text}</span>{' '}
      <IconMoreThan cbeta={cbeta} cnu={cnu} dimmer={dimmer} />
    </button>
  )
}

export default BtnText
