import stls from '@/styles/components/icons/IconArrowRightLong.module.sass'

const IconArrowRightLong = () => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        viewBox='0 0 30 30'
        fill='none'>
        <path
          d='M19.2857 20.7141L25 14.9999M25 14.9999L19.2857 9.24414M25 14.9999L6.42857 14.9999'
          stroke='#292929'
          strokeWidth='0.952381'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconArrowRightLong
