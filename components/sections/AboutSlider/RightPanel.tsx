import stls from '@/styles/components/sections/AboutSlider/RightPanel.module.sass'
import classNames from 'classnames'
import Image from 'next/image'

const RightPanel = ({ imageUrl, slideDirection }) => {
  console.log(imageUrl)
  return (
    // <div className={classNames({
    // [stls.rightPanel]: true,
    // [stls.slideDirection]: slideDirection})}></div>
    <div className={classNames(stls['right-panel'], stls[`${slideDirection}`])}>
      <div className={stls.img}>
        <div className={stls.filterImg}>
        <span className={stls.filter}></span>
        <Image
        className={stls.innerImg} 
        // layout="responsive"
        // width={580}
        // height={573}
        src={imageUrl} alt={'divan'} />
      </div>
      </div>
    </div>
  )
}

export default RightPanel
