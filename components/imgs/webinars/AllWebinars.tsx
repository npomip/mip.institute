import stls from '@/styles/components/imgs/webinars/AllWebinars.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/webinars/all-webinars.jpg'

const ImgPortrait1 = ({ width = 0, height = 0, mobileLayout }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Портрет 1'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        objectFit='cover'
        placeholder='blur'
      />
    </div>
  )
}

export default ImgPortrait1
