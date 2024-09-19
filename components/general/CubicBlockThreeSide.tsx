import stls from '@/styles/components/general/CubicBlockThreeSide.module.sass'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import Image from 'next/image'
import IconPracticalStepInfo from '../icons/IconPracticalStepInfo'


const CubicBlockThreeSide = ({title, subtitle, src}) => {
  return (
    <div className={stls.scene}>
      <div className={stls.card}>
        <div className={stls.icon}>
          <IconPracticalStepInfo />
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
