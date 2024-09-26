import stls from '@/styles/components/icons/IconThickRound.module.sass'

type Props = {
  fill?: string
}
const IconThickRound = ({ fill = '#F24E1E' }: Props) => {
  return (
    <span className={stls.container}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'>
        <rect width='20' height='20' rx='10' fill={fill} />
        <path
          d='M13.3158 8L9.10526 12.2106L7 10.1053'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}

export default IconThickRound
