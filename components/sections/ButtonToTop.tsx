import stls from '@/styles/components/sections/ButtonToTop.module.sass'
import { useEffect, useState } from 'react'
import loadIcon from '@/helpers/general/loadIcon'

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window?.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div
      onClick={scrollToTop}
      className={`${stls.scrollToTop} ${isVisible ? stls.show : ''}`}>
      {loadIcon('IconArrowUpRound')}
    </div>
  )
}

export default ButtonToTop
