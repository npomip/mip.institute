import stls from '@/styles/components/icons/IconVioletCircle.module.sass'

const IconVioletCircle = () => {
  return (
    <span className={stls.container}>
      <svg 
        width="21" 
        height="20" 
        viewBox="0 0 21 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect 
          width="21" 
          height="20" 
          rx="10" 
          fill="#6F01C6"
        />
        <path 
          d="M13.9831 8L9.56209 12.2106L7.35156 10.1053" 
          stroke="white" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    </span>
  )
}

export default IconVioletCircle
