import stls from '@/styles/components/imgs/diplomas/ImgDiplomaAlt.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma-alt.jpeg'

const ImgDiplomaAlt = ({ width = null, height = null }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
      />
    </span>
  )
}

export default ImgDiplomaAlt
