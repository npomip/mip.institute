import stls from '@/styles/components/icons/IconOrangeDot.module.sass'

const IconOrangeDot = () => {
  return (
    <span className={stls.container}>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <rect width='20' height='20' rx='10' fill='#F87E1B' />
        <circle cx='10' cy='10' r='3' fill='white' />
      </svg>
    </span>
  )
}

export default IconOrangeDot
