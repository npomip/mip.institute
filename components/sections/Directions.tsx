import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/Directions.module.sass'
import routes from '@/config/routes'
import TagOrange from '../general/TagOrange'
import IconForBottomDirections from '../icons/IconForBottomDirections'
import ProgramList from './ChooseProgram/ProgramList'
import DirectionsSelector from './DirectionsSelector'
import { useState } from 'react'
import classNames from 'classnames'

type Props = {
  bachelors?: []
}

const Directions = ({bachelors}: Props) => {
  const [currentType, setCurrentType] = useState('profession')
  const list = [
    {
      id: 1,
      label: 'Бакалавриат',
      href: routes.front.bachelors,
      programType: 'bachelor'
    },
    {
      id: 2,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession'
    },
    {
      id: 3,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course'
    },
  ]
  const [activeItem, setActiveItem] = useState(1)


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
                {list.map(({id, label, programType}) => (
                  <p
                    key={id}
                    className={classNames({
                      [stls.professions]: true,
                      [stls.active]: currentType === programType
                    })}
                    onClick={() => {
                      if (activeItem === id) {
                        setActiveItem(null)
                        setCurrentType(null)
                      } else {
                        setActiveItem(id)
                        setCurrentType(programType)
                      }
                    }}
                  >{label}</p>
                ))
                }
              </div>
              <div className={stls.rightBlock}>
                <ProgramList currentType={currentType}
                bachelors={bachelors}
                ofType={
                  currentType === 'course'
                    ? 'course'
                    : currentType === 'profession'
                    ? 'profession'
                    : currentType === 'bachelor'
                    ? 'bachelor'
                    : 'bachelor'
                } />
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
