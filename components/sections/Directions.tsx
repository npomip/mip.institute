import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/Directions.module.sass'
import TagOrange from '../general/TagOrange'
import IconForBottomDirections from '../icons/IconForBottomDirections'
import ProgramList from './ChooseProgram/ProgramList'
import DirectionsSelector from './DirectionsSelector'
import { useState } from 'react'

const Directions = () => {
  const [currentType, setCurrentType] = useState('profession')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.fullContainer}>
          <div className={stls.content}>
            <div className={stls.heading}>
              <div className={stls.tag}>
                <TagOrange>Выбор</TagOrange>
              </div>
              <h2 className={stls.title}>Направления</h2>
            </div>
            <div className={stls.flexContainer}>
              <div className={stls.leftBlock}>
                <p className={stls.professions}>
                  Профессиональная переподготовка
                </p>
                <ProgramList ofType={'profession'} />
              </div>
              <div className={stls.rightBlock}>
                <p className={stls.courses}>Повышение квалификации</p>
                <ProgramList ofType={'course'} />
              </div>
            </div>
            <div className={stls.icon}>
              <IconForBottomDirections />
            </div>
            <div className={stls.flexContainerMobile}>
              <DirectionsSelector
                currentType={currentType}
                setCurrentType={setCurrentType}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Directions
