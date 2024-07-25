import { useState } from 'react'
import stls from 'styles/components/popups/PopupSpecialization.module.sass'
import { BtnClose } from '../btns'

type Props = {
  image: string | JSX.Element
  title: string
  descriptionList?: { text: string }[]
  onClose: () => void
}

const PopupSpecialization = ({
  image,
  title,
  descriptionList,
  onClose
}: Props) => {
  const [cut, setCut] = useState(5)
  const [isFullListVisible, setIsFullListVisible] = useState(false)

  const handleChange = () => {
    setIsFullListVisible(!isFullListVisible)
    if (!isFullListVisible) {
      setCut(50)
    } else {
      setCut(5)
    }
  }

  const list = descriptionList || []

  return (
    <div className={stls.container}>
      <span className={stls.closeButton}>
        <BtnClose onClick={onClose} />
      </span>
      <div className={stls.content}>
        <div className={stls.image}>
          <div className={stls.portrait}>
            <span className={stls.filter}></span>
            {image}
          </div>
        </div>
        <div className={stls.title}>{title}</div>
        <div className={stls.description}>
          <ul>
            {list
              .filter((_, index) => index < cut)
              .map(item => (
                <li key={item.text}>{item.text}</li>
              ))}
          </ul>
        </div>
        <button className={stls.button} onClick={handleChange}>
          {isFullListVisible ? 'Скрыть' : 'Читать далее'}
        </button>
      </div>
    </div>
  )
}

export default PopupSpecialization
