import stls from '@/styles/components/general/CubicBlockFourSide.module.sass'
import { practicalTrainReq } from 'constants/practicalTrainReq'


const CubicBlockFourSide = ({rotate}) => {
  return (
    <div className={stls.scene}>
      <div
        className={stls.cube}
        style={{
          transform: `rotateX(${rotate}deg)`,
          transition: 'transform 1s ease' // плавная анимация
        }}>
          {practicalTrainReq.map((el, i) => (
            <div className={`${stls.card} ${stls[`card${i+1}`]}`} >
              <div className={stls.text}>
                <p className={stls.title}>{el.title}</p>
                <p className={stls.subtitle}>{el.subtitle}</p>
              </div>
              <p className={stls.num}>{i+1}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default CubicBlockFourSide
