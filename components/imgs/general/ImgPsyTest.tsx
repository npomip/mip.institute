import stls from '@/styles/components/imgs/general/ImgPsyTest.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/psyTest.svg'

const ImgPsyTest = () => {
  return (
    <div className={stls.container}>
      <Image src={pic} alt='Пройди тест о профессии' />
    </div>
  )
}

export default ImgPsyTest
