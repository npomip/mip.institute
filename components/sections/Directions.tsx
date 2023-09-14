import stls from '@/styles/components/sections/Directions.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { ContextStaticProps } from '@/context/index'
import { useContext, useState } from 'react'

import ProgramList from './ChooseProgram/ProgramList'
import DirectionsSelector from './DirectionsSelector'
import TagOrange from '../general/TagOrange'
import IconVerticalArrow from '../icons/IconVerticalArrow'

const Directions = () => {
  const { program } = useContext(ContextStaticProps)

  const [currentType, setCurrentType] = useState('')

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.fullContainer}>
          <div className={stls.content}>
            <div className={stls.heading}>
              <h2 className={stls.title}>Направления</h2>
              <div className={stls.tag}>
                <TagOrange>Выбор</TagOrange>
              </div>

            </div>
            <DirectionsSelector currentType={currentType} setCurrentType={setCurrentType} />
            <ProgramList currentType={currentType} ofType={currentType === 'course' ? 'course' : currentType === 'profession' ? 'profession' : null} />
          </div>
          <div className={stls.icon}>
            <IconVerticalArrow />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Directions
