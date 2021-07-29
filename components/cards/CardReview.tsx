import stls from '@/styles/components/cards/CardReview.module.sass'
import truncate from 'truncate'
import Image from 'next/image'
import { BtnText } from '@/components/btns'

const CardReview = ({ title, photo, name, occupation }) => {
  return (
    <article className={stls.container}>
      <div className={stls.img}>
        <Image src={photo} alt={name} placeholder={'blur'} />
      </div>
      <div className={stls.content}>
        <h3 className={stls.title} title={title}>
          {truncate(title, 65)}
        </h3>
        <div className={stls.text}>
          <p className={stls.name}>{name}</p>
          <p className={stls.occupation}>{occupation}</p>
        </div>
        <BtnText text='Читать историю' />
      </div>
    </article>
  )
}

export default CardReview
