import stls from '@/styles/components/higherEducation/HasDoubtsHE.module.sass'
import Image from 'next/image'
import { BtnAlpha } from '../btns'
import pic from '@/public/assets/imgs/forWhom/hasDoubtsImage.png'

const HasDoubtsHE = () => {
  return (
    <div className={stls.container}>
      <div className={stls.image}>
        <Image src={pic} />
      </div>
      <div className={stls.text}>
        <span className={stls.title}>Сомневаешься в своих баллах?</span>
        <span className={stls.description}>
          Оцени свои шансы на поступление и узнай проходной балл!
        </span>
      </div>
      <div className={stls.button}>
        <BtnAlpha />
      </div>
    </div>
  )
}

export default HasDoubtsHE
