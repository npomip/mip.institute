import stls from '@/styles/components/imgs/diplomas/ImgDiplomaDynamic.module.sass'
import { TGeneralImg } from '@/types/index'
import cn from 'classnames'
import { ImgTemplate } from '@/components/imgs'
import { useCheckIfResourseExists } from '@/hooks/index'
import defaultSrc from '@/public/assets/imgs/diplomas/diploma.jpg'
import defaultSrcAlt from '@/public/assets/imgs/diplomas/diploma-alt.jpg'
import defaultSrcSupplement from '@/public/assets/imgs/diplomas/supplement.jpg'

type TImgDiplomaDynamic = TGeneralImg & {
  diplomaAlt?: boolean
  diplomaSupplement?: boolean
}

const ImgDiplomaDynamic = ({
  classNames,
  src,
  alt,
  width,
  height,
  diplomaAlt,
  diplomaSupplement
}: TImgDiplomaDynamic) => {
  const isImage = useCheckIfResourseExists({ src })

  return (
    <ImgTemplate
      classNames={[cn(stls.container, classNames)]}
      src={
        src && isImage
          ? src
          : diplomaAlt
          ? defaultSrcAlt
          : diplomaSupplement
          ? defaultSrcSupplement
          : defaultSrc
      }
      alt={alt || 'Диплом'}
      width={width}
      height={height}
    />
  )
}

export default ImgDiplomaDynamic
