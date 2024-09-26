import stls from '@/styles/components/imgs/diplomas/ImgBachelorDiploma.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/BachelorDiplomaAlt.jpeg'

const ImgBachelorDiplomaAlt = ({ width = null, height = null }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Диплом Бакалавра'
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

export default ImgBachelorDiplomaAlt
