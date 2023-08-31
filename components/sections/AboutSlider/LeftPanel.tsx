import CustomPrevButton from '@/components/general/CustomPrevButton'
import IconNextButton from '@/components/icons/IconNextButton'
import IconPrevButton from '@/components/icons/IconPrevButton'
import stls from '@/styles/components/sections/AboutSlider/LeftPanel.module.sass'

type AboutType = {
  standalone?: boolean
}

const LeftPanel = ({ component, onArrowClick, currentIndex }) => {

  return (
    <div className={stls.container}>
      {component.map((slide, index) => (
        <div key={index} className={index === currentIndex ? stls.block : stls.hidden}>
          {slide}
        </div>
      ))}
      <div onClick={() => onArrowClick('left')} className={stls.prevBtn} >
      <IconPrevButton fourtyPx/>
      </div>
        <div onClick={() => onArrowClick('right')} className={stls.nextBtn}>
        <IconNextButton fourtyPx  />
        </div>
      
      
      
      
    </div>
  )
}

export default LeftPanel
