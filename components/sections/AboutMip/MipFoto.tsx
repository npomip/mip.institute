import stls from '@/styles/pages/about/MipFoto.module.sass'
import photo from '@/public/assets/imgs/general/Rectangle.jpeg'
import Image from 'next/image'
import IconSpiral from '@/components/icons/IconSpiral'

export default function MipFoto() {
  return (
    <div className={stls.container}>
      <Image
        alt='logo'
        className={stls.lady}
        width={360}
        height={400}
        layout='responsive'
        src={photo}
      />
      <div className={stls.figure}></div>
      <div className={stls.shadow}></div>
      <div className={stls.round}></div>
      <div className={stls.spiralContainer}>
        <IconSpiral />
      </div>
    </div>
  )
}
