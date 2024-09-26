import stls from '@/styles/components/imgs/diplomas/ImgDiploma.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/diploma.jpeg'

const ImgDiploma = ({ width = null, height = null }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Диплом'
        className={stls.img}
        width={width}
        height={height}
        sizes='100vw'
        style={{
          width: '100%',
          height: 'auto'
        }}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgDiploma
