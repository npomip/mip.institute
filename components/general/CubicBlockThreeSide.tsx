import stls from '@/styles/components/general/CubicBlockThreeSide.module.sass'
import Image from 'next/image'
import IconPracticalStepInfo from '../icons/IconPracticalStepInfo'
import { ReactDOM } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import PopupTrainSteps from '../popups/PopupTrainSteps'


type Props = {
  id: number
  title: string
  subtitle: ReactDOM
  src: string
  mobHeight?: number
  fullText: string
}

const CubicBlockThreeSide = ({title, subtitle, src, mobHeight, fullText}) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)');

  return (
    <div className={stls.scene}>
      <div className={stls.card} style={isMobileAndTabletLayout ? {height: `${mobHeight}px`} : {}}>
        <div className={stls.icon}>
          <PopupTrainSteps title={title} text={fullText}/>
        </div>
        <div className={stls.text}>
          <p className={stls.title}>{title}</p>
          <p className={stls.subtitle}>{subtitle}</p>
        </div>
        <div className={stls.image}>
          <Image
            src={src}
            alt='Шаги'
          />
        </div>
      </div>
    </div>
  )
}

export default CubicBlockThreeSide
