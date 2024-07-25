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
              <h2 className={stls.title}>Программы</h2>
              <div className={stls.tag}>
                <TagOrange>Выбор</TagOrange>
              </div>
            </div>
            <div className={stls.flexContainer}>
              <div className={stls.leftBlock}>
                <p className={stls.professions}>
                  Бакалавриат
                </p>
                <p className={stls.professions}>
                  Профессиональная переподготовка
                </p>
                <p className={stls.professions}>
                  Повышение квалификации
                </p>
              </div>
              <div className={stls.rightBlock}>
                <ProgramList currentType={currentType}
                ofType={
                  currentType === 'course'
                    ? 'course'
                    : currentType === 'profession'
                    ? 'profession'
                    : currentType === 'bachelor'
                    ? 'bachelor'
                    : null
                } />
                {/* <ProgramList ofType={'course'} /> */}
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
