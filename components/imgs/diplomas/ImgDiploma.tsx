import stls from '@/styles/components/imgs/diplomas/ImgDiploma.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma.jpg'

const ImgDiploma = ({ width = 0, height = 0 }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width !== 0 && width}
        height={height !== 0 && height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgDiploma
