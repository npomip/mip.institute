import stls from '@/styles/components/imgs/general/ImgPPLLogo.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/pplLogo.svg'

const ImgPPLLogo = () => {
  return (
    <div className={stls.container}>
      <Image
        src={pic}
        alt='Логотип ППЛ'
        fill
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw'
        className={stls.img}
      />
    </div>
  )
}

export default ImgPPLLogo
