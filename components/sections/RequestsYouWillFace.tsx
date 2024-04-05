import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import { useEffect, useState } from 'react'
import { IconCircleCheck } from '../icons'
import IconInfo from '../icons/IconInfo'

const RequestsYouWillFace = ({ title, description, index }) => {
  const [isFlipped, setFlipped] = useState(false)
  const handleCardClick = () => {
    setFlipped(!isFlipped)
  }

  useEffect(() => {
    if (index === 0) {
      setFlipped(true)
    }
  }, [index])

  return (
    <div
      className={`${stls.card} ${isFlipped ? stls.flipped : ''}`}
      onClick={handleCardClick}>
      <div className={stls.front}>
        <div className={stls.icon}>
          <IconCircleCheck programSection />
        </div>
        <p>{title}</p>
        {index === 0 && (
          <div className={stls.info}>
            <IconInfo calpha />
          </div>
        )}
      </div>
      <div className={stls.back}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default RequestsYouWillFace
