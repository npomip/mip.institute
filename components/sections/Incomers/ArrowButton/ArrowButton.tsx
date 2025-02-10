import stls from './ArrowButton.module.sass'

const Icon = () => {
  return (
    <span className={stls.iconContainer}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='29'
        height='29'
        viewBox='0 0 29 29'
        fill='none'>
        <path
          d='M9.66927 19.3346L19.3359 9.66797M19.3359 9.66797V16.918M19.3359 9.66797H12.0859'
          stroke='#212121'
          strokeWidth='1.36707'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

const ArrowButton = () => {
  return (
    <button className={stls.btn}>
      <Icon />
    </button>
  )
}

export default ArrowButton
