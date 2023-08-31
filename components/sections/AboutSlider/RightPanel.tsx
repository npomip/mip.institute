import stls from '@/styles/components/sections/AboutSlider/RightPanel.module.sass'
import classNames from 'classnames'
import Image from 'next/image'


const RightPanel = ({ imageUrl, slideDirection }) => {
  return (
    // <div className={classNames({
      // [stls.rightPanel]: true, 
      // [stls.slideDirection]: slideDirection})}></div>
    <div className={classNames(stls['right-panel'], stls[`${slideDirection}`])}>
      <div className={stls.img}>
        <Image src={imageUrl} alt={'divan'} />
      </div>
      
    </div>
  )
}

export default RightPanel
