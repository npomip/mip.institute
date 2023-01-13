import stls from '@/styles/components/icons/IconArrowRight.module.sass'

const IconArrowRight = () => {
  return (
    <span className={stls.container}>
      <svg viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Стрелка вправо</title>
        <path
          d='M1 1L8.5 8.5L1 16'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </span>
  )
}

export default IconArrowRight
