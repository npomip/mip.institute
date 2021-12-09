import stls from '@/styles/components/imgs/diplomas/ImgDiplomaAlt.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma-alt.jpg'

const ImgDiplomaAlt = ({ width = null, height = null }) => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgDiplomaAlt
