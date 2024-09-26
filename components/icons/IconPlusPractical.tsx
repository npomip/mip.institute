import stls from '@/styles/components/icons/IconPlusPractical.module.sass'

const IconPlusPractical = () => {
  return (
    <span className={stls.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
        <circle cx="19.5" cy="19.5" r="19" fill="#D6C5FF" stroke="white"/>
        <line x1="19.5" y1="13" x2="19.5" y2="26" stroke="white"/>
        <line x1="26" y1="19.5" x2="13" y2="19.5" stroke="white"/>
      </svg>
    </span>
  )
}

export default IconPlusPractical
