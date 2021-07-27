import stls from '@/styles/components/icons/IconMoreThan.module.sass'
import classNames from 'classnames'

const IconMoreThan = ({ cbeta = true, cnu = false, dimmer = false }) => {
  if (cnu === true) cbeta = false
  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.cbeta]: cbeta,
        [stls.cnu]: cnu,
        [stls.dimmer]: dimmer
      })}>
      <title>Далее</title>
      <svg viewBox='0 0 6 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 0.5L5 4.5L1 8.5'
          stroke='#F87E1B'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconMoreThan
