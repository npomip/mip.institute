import stls from '@/styles/components/icons/IconVioletSquare.module.sass'

const IconVioletSquare = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='47'
        height='47'
        viewBox='0 0 47 47'
        fill='none'>
        <rect
          x='47'
          y='47'
          width='47'
          height='47'
          rx='5'
          transform='rotate(180 47 47)'
          fill='#6F01C6'
        />
        <path
          d='M20 24.1622L22.6351 26.7973L28.4324 21'
          stroke='white'
          strokeWidth='1.03389'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconVioletSquare
