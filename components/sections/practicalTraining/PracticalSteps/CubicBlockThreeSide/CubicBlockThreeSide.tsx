import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from './CubicBlockThreeSide.module.sass'
import PopupTrainSteps from '@/components/popups/PopupTrainSteps'
import { CldImage } from 'next-cloudinary'

const CubicBlockThreeSide = ({ title, subtitle, src, mobHeight, fullText }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <div className={stls.scene}>
      <div
        className={stls.card}
        style={isMobileAndTabletLayout ? { height: `${mobHeight}px` } : {}}>
        <div className={stls.icon}>
          <PopupTrainSteps title={title} text={fullText} />
        </div>
        <div className={stls.text}>
          <p className={stls.title}>{title}</p>
          <p className={stls.subtitle}>{subtitle}</p>
        </div>
        <div className={stls.image}>
          <CldImage src={src} restore alt='Шаги' width={191} height={305} />
        </div>
      </div>
    </div>
  )
}

export default CubicBlockThreeSide
