import stls from '@/styles/components/imgs/general/ImgCreateApplication.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/createApplication.png'

const ImgCreateApplication = ({ width = 624, height = 426 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='hands on main'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgCreateApplication