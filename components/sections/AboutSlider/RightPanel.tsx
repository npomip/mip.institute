import stls from '@/styles/components/sections/AboutSlider/RightPanel.module.sass'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'

type Props = {
  imageUrl: StaticImageData
  slideDirection: string
}

const RightPanel = ({ imageUrl, slideDirection }: Props) => {
  return (
    <div className={classNames(stls['right-panel'], stls[`${slideDirection}`])}>
      <div className={stls.img}>
        <div className={stls.filterImg}>
          <span className={stls.filter}></span>
          <Image
            className={stls.innerImg}
            src={imageUrl}
            alt='divan'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default RightPanel
