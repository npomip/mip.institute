import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/cards/CardForWhom.module.sass'
import Image, { StaticImageData } from 'next/image'

type Props = {
  imageSrc: string | StaticImageData
  title: string
  description: string
}

const CardForWhom = ({ imageSrc, title, description }: Props) => {
  const isMobileLayout = useBetterMediaQuery('(max-width: 480px)')

  return (
    <div className={stls.card}>
      <div className={stls.textContent}>
        <span className={stls.title}>{title}</span>
        <span className={stls.description}>{description}</span>
      </div>
      <div className={stls.image}>
        <Image
          src={imageSrc}
          alt='фото'
          height={isMobileLayout ? 220 : 250}
          width={170}
        />
      </div>
    </div>
  )
}

export default CardForWhom
