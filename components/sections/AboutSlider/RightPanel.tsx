import stls from '@/styles/components/sections/AboutSlider/RightPanel.module.sass'
import classNames from 'classnames'
import Image from 'next/image'

const RightPanel = ({ imageUrl, slideDirection }) => {
  return (
    <div className={classNames(stls['right-panel'], stls[`${slideDirection}`])}>
      <div className={stls.img}>
        <div className={stls.filterImg}>
          <span className={stls.filter}></span>
          <Image
            className={stls.innerImg}
            width={585}
            height={576}
            src={imageUrl}
            alt={'divan'}
          />
        </div>
      </div>
    </div>
  )
}

export default RightPanel
