import stls from '@/styles/components/imgs/general/ImgPPLLogo.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/pplLogo.svg'

const ImgPPLLogo = () => {
  return (
    <div className={stls.container}>
      <Image src={pic} alt='Логотип ППЛ' />
    </div>
  )
}

export default ImgPPLLogo
