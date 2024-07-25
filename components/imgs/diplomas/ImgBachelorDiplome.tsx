import stls from '@/styles/components/imgs/diplomas/ImgBachelorDiploma.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/diplomas/bachelorDiploma.jpeg'

const ImgBachelorDiploma = ({ width = null, height = null }) => {
  return (
    <span className={stls.container}>
      <Image
        src={pic}
        alt='Диплом Бакалавра'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </span>
  )
}

export default ImgBachelorDiploma
