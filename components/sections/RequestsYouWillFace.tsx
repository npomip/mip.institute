import stls from '@/styles/components/sections/RequestsYouWillFace.module.sass'
import { useEffect, useState } from 'react'
import loadIcon from '@/helpers/general/loadIcon'

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
          {loadIcon('IconCircleCheck', { programSection: true })}
        </div>
        <p>{title}</p>
        {index === 0 && (
          <div className={stls.info}>
            {loadIcon('IconInfo', { calpha: true })}
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
