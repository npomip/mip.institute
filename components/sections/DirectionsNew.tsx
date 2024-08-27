import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DirectionsNew.module.sass'
import navigationList from 'constants/navigationStudyFields'
import Link from 'next/link'
import parse from 'html-react-parser'
import routes from '@/config/routes'
import IconNavigation from '../icons/IconNavigation'
import { useState } from 'react'
import ProgramsOnMain from './ProgramsOnMain'
import BtnLinkProgram from '../btns/BtnLinkProgram'

type Props = {
  programs: any[]
  bachelors: any[]
}

const DirectionsNew = ({ programs, bachelors }: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const handleMouseEnter = icon => {
    setHoveredIcon(icon)
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
  }

  const amountOfCourses = programs.filter(el => el.type === 'Course').length
  const amountOfProfessions = programs.filter(
    el => el.type === 'Profession'
  ).length

  const renderCounter = (type: string) => {
    switch (type) {
      case 'bachelor':
        return `${bachelors.length} программы`
      case 'course':
        return `${amountOfCourses} курсов`
      case 'profession':
        return `${amountOfProfessions} программы`
      default:
        return `${bachelors.length} ступени`
    }
  }

  const allPrograms = programs.concat(bachelors)

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h2 className={stls.title}>Направления обучения</h2>
        </div>
        <div className={stls.contentBlock}>
          <div className={stls.navBlocksContainer}>
            {navigationList.map(({ label, href, icon, programType }) => (
              <Link href={href} passHref key={label}>
                <div
                  className={stls.linkInner}
                  onMouseEnter={() => handleMouseEnter({ icon })}
                  onMouseLeave={handleMouseLeave}>
                  <div className={stls.content}>
                    <h2 className={stls.navTitle}>{label}</h2>
                    <div className={stls.countPrograms}>
                      <span>{renderCounter(programType)}</span>
                    </div>
                  </div>
                  <div className={stls.icon}>
                    <IconNavigation hover={hoveredIcon?.icon === icon}>
                      {icon}
                    </IconNavigation>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <BtnLinkProgram
            text='Все программы'
            amount={programs?.length + bachelors?.length}
          />
        </div>
        <ProgramsOnMain allPrograms={allPrograms} />
      </Wrapper>
    </section>
  )
}

export default DirectionsNew
