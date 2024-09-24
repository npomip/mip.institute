import stls from '@/styles/components/icons/IconRatingStar.module.sass'



const IconRatingStar = () => {
  return (
    <span
      className={stls.container} >
      <svg xmlns="http://www.w3.org/2000/svg" width="57" height="125" viewBox="0 0 57 125" fill="none">
        <path d="M29 124L29 64" stroke="#6F01C6" strokeWidth="0.5" strokeLinecap="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M28.5 57C28.443 41.2792 15.7051 28.5528 0 28.5528C15.7401 28.5528 28.5 15.7691 28.5 0C28.5567 15.7208 41.2949 28.4472 57 28.4472C41.2596 28.4472 28.5 41.2309 28.5 57Z" fill="#6F01C6"/>
      </svg>
    </span>
  )
}

export default IconRatingStar
