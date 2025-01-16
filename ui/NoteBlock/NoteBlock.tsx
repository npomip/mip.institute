import PopupTrigger from '@/ui/PopupTrigger'
import stls from './NoteBlock.module.sass'
import { CldImage } from 'next-cloudinary'

type Props = {
  title: any
  description: string
  marginTop?: number
  marginBottom?: number
}

const NoteBlock = ({
  title,
  description,
  marginTop = 0,
  marginBottom = 0
}: Props) => {
  return (
    <div style={{ marginTop, marginBottom }} className={stls.container}>
      <div className={stls.image}>
        <CldImage
          src={'has_Doubts_Image_6f4a29efb2'}
          alt='Изображение'
          width={320}
          height={320}
        />
      </div>
      <div className={stls.text}>
        <div className={stls.title}>{title}</div>
        <div className={stls.description}>{description}</div>
      </div>
      <div className={stls.buttonBlock}>
        <PopupTrigger btn='gamma' cta='knowRequirement' />
      </div>
    </div>
  )
}

export default NoteBlock
