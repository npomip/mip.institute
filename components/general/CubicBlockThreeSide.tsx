import stls from '@/styles/components/general/CubicBlockThreeSide.module.sass'
import { practicalTrainSteps } from 'constants/practicalTrainSteps'
import Image from 'next/image'
import IconPracticalStepInfo from '../icons/IconPracticalStepInfo'


const CubicBlockThreeSide = ({rotate}) => {
  return (
    <div className={stls.scene}>
      <div
        className={stls.cube}
        style={{
          transform: `rotateX(${rotate}deg)`,
          transition: 'transform 1s ease' // плавная анимация
        }}>
          {practicalTrainSteps.map((el, i) => (
            <div key={el.title} className={`${stls.card} ${stls[`card${i+1}`]}`} >
              <div className={stls.icon}>
                <IconPracticalStepInfo />
              </div>
              <div className={stls.text}>
                <p className={stls.title}>{el.title}</p>
                <p className={stls.subtitle}>{el.subtitle}</p>
              </div>
              <div className={stls.image}>
                <Image
                  src={el.src}
                  alt='Шаги'
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CubicBlockThreeSide
