import stls from '@/styles/components/general/NoteBlock.module.sass'
import Image, { StaticImageData } from 'next/image'
import { BtnGamma } from '../btns'
import PopupTrigger from './PopupTrigger'

type Props = {
  imageSrc: string | StaticImageData
  title: string
  description: string
  buttonText: string
}

const NoteBlock = ({ imageSrc, title, description, buttonText }: Props) => {
  return (
    <div className={stls.container}>
      <div className={stls.image}>
        <Image src={imageSrc} />
      </div>
      <div className={stls.text}>
        <span className={stls.title}>{title}</span>
        <span className={stls.description}>{description}</span>
      </div>
      <div className={stls.button}>
        <PopupTrigger btn='gamma' cta='use' />
      </div>
    </div>
  )
}

export default NoteBlock
