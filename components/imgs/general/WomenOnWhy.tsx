import stls from '@/styles/components/imgs/general/WomenOnWhy.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/womenOnWhy.png'

const WomenOnWhy = ({ width = 649, height = 649 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Девушка за ноутбуком обучается'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default WomenOnWhy