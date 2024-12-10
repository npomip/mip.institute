import { ReactNode } from 'react'
import stls from './InfoPlate.module.sass'
import { CldImage } from 'next-cloudinary'

type PropsWithImage = {
  isImage: true
  imageSrc: string
  icon?: never
  content?: never
  number?: never
}

type PropsWithoutImage = {
  icon: ReactNode
  header?: string
  content: string | ReactNode
  number?: number
  isNumbered?: boolean
  isImage?: false
}

type Props = PropsWithImage | PropsWithoutImage

const InfoPlate = (props: Props) => {
  if (props.isImage) {
    return (
      <div className={stls.containerImage}>
        <CldImage
          src={props.imageSrc}
          alt='Картинка'
          className={stls.image}
          style={{ width: '100%', height: 'auto' }}
          width='400'
          height='400'
          crop='fit'
        />
      </div>
    )
  } else {
    const {
      icon,
      header,
      content,
      number,
      isNumbered = false
    } = props as PropsWithoutImage

    return isNumbered ? (
      <div
        className={`${stls.container} ${stls.containerNumber} ${
          stls[`looper_${number}`]
        }
        `}>
        <div className={stls.iconNumber}>{icon}</div>
        <p className={stls.contentNumber}>{content}</p>
      </div>
    ) : (
      <div className={stls.container}>
        <div className={stls.icon}>{icon}</div>
        <div>
          <p className={stls.header}>{header}</p>
          <div className={stls.content}>{content}</div>
        </div>
      </div>
    )
  }
}

export default InfoPlate
