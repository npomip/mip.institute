import stls from '@/styles/components/icons/IconMap.module.sass'
import classNames from 'classnames'

const IconMap = ({ theta = false, halfopacity = false }) => {
  return (
    <div
      className={classNames([stls.container], {
        [stls.theta]: theta,
        [stls.halfopacity]: halfopacity
      })}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 2V18'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16 6V22'
          stroke='#F87E1B'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconMap
