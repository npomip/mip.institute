import stls from '@/styles/components/icons/IconNextButtonPractical.module.sass'
import classNames from 'classnames'

interface Props {
  fourtyPx?: boolean
  fourtyPxViolet?: boolean
  isLiveCourse?: boolean
}

const IconNextButtonPractical = ({
  fourtyPx = false,
  fourtyPxViolet = false,
}: Props) => {
  return (
    <span
      className={classNames({
        [stls.container]: true,
        [stls.fourtyPx]: fourtyPx,
        [stls.fourtyPxViolet]: fourtyPxViolet,
      })}>
      <svg 
      width="47" 
      height="47" 
      viewBox="0 0 47 47" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
        <rect 
        x="47" 
        y="47" 
        width="47" 
        height="47" 
        rx="5" 
        transform="rotate(180 47 47)" 
        fill="#1A1A1A"/>
        <path d="M27.7071 24.7071C28.0976 24.3166 28.0976 23.6834 27.7071 23.2929L21.3431 16.9289C20.9526 16.5384 20.3195 16.5384 19.9289 16.9289C19.5384 17.3195 19.5384 17.9526 19.9289 18.3431L25.5858 24L19.9289 29.6569C19.5384 30.0474 19.5384 30.6805 19.9289 31.0711C20.3195 31.4616 20.9526 31.4616 21.3431 31.0711L27.7071 24.7071ZM25.5 25H27V23H25.5V25Z" fill="white"/>
      </svg>
    </span>
  )
}

export default IconNextButtonPractical
