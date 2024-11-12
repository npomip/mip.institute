import stls from '@/styles/components/icons/IconVioletCircle.module.sass'

type Props = {
  width?: string
  height?: string
}

const IconVioletCircle = ({ width, height }: Props) => {
  return (
    <span
      className={stls.container}
      style={{ width: `${width}`, height: `${height}` }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'>
        <rect width='21' height='20' rx='10' fill='#D6C5FF' />
        <path d='M13.9831 8L9.56209 12.2106L7.35156 10.1053' stroke='white' />
      </svg>
    </span>
  )
}

export default IconVioletCircle
