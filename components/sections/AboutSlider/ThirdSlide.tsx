import stls from '@/styles/components/sections/AboutSlider/ThirdSlide.module.sass'
import Image from 'next/image'
import pic from '@/public/assets/imgs/general/lection.png'

const ThirdSlide = () => {
  return (
    <div className={stls.container}>
      
      <p className={stls.first}><span className={stls.bold}>МИП</span> — это команда практикующих экспертов, отзывчивых кураторов и наставников, которые будут сопровождать вас от начала до конца и обеспечат старт вашей успешной карьеры.</p>
        <Image
        src={pic}
        alt='Лекция'
        className={stls.img}
        // width={width !== 0 && width}
        // height={height !== 0 && height}
        placeholder='blur' />
    </div>
  )
}

export default ThirdSlide