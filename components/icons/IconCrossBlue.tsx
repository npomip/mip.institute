import stls from '@/styles/components/icons/IconCrossBlue.module.sass'
import classNames from 'classnames'

interface Props {
  isRotated?: boolean
}

const IconCrossBlue = ({ isRotated }: Props) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.rotate]: isRotated
      })}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='34'
        height='34'
        viewBox='0 0 34 34'
        fill='none'>
        <line y1='16.5001' x2='33.2415' y2='16.5001' stroke='#243E89' />
        <line
          x1='16.6172'
          y1='33.2423'
          x2='16.6172'
          y2='0.000770569'
          stroke='#243E89'
        />
      </svg>
    </span>
  )
}

export default IconCrossBlue
