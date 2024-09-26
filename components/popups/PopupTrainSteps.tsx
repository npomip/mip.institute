import stls from '@/styles/components/popups/PopupTrainSteps.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import Image from 'next/image'
import Popup from 'reactjs-popup'
import IconPracticalStepInfo from '../icons/IconPracticalStepInfo'
import IconClosePopupSteps from '../icons/IconClosePopupSteps'

type PopupTrainStepsType = {
  title: string
  text: string
}

const PopupTrainSteps = ({
title,
text
}: PopupTrainStepsType) => {



  const renderer = new marked.Renderer()
  renderer.strong = text => `<span className=${stls.strongText}>${text}</span>`
  marked.setOptions({ renderer })
  return (
    <Popup
      trigger={
        <div>
          <IconPracticalStepInfo />
        </div>
      }
      modal
      nested>
      {close => (
        <div className={stls.container}>
          <h2 className={stls.title}>{title}</h2>
          <div className={stls.text}>{text}</div>
          <button className={stls.closeBtn} onClick={close}>
            <span className={stls.btnText}>Закрыть окно</span>
            <IconClosePopupSteps />
          </button>
        </div>
      )}
    </Popup>
  )
}

export default PopupTrainSteps
