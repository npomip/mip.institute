import Wrapper from '@/components/layout/Wrapper'
import stls from '@/styles/components/sections/DirectionsNew.module.sass'
import navigationList from 'constants/navigationStudyFields'
import Link from 'next/link'
import parse from 'html-react-parser'
import routes from '@/config/routes'
import IconNavigation from '../icons/IconNavigation'
import { useState } from 'react'



type Props = {
  programs: number
  bachelors: number
}


const DirectionsNew = ({programs, bachelors}: Props) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);  
  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  }; 
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <h2 className={stls.title}>Направления обучения</h2>
        </div>
        <div className={stls.contentBlock}>
            <div className={stls.navBlocksContainer}>
            {navigationList.map(({label, href, icon, programType}) =>
              <Link href={href} passHref key={label}>
                <div 
                className={stls.linkInner} 
                onMouseEnter={() => handleMouseEnter({icon})}
                onMouseLeave={handleMouseLeave}
                >
                  <div className={stls.content}>
                    <h2 className={stls.navTitle}>{label}</h2>
                    <div className={stls.countPrograms}>
                      {programType === 'bachelor' ? <span>{bachelors} программы</span>
                      : programType === 'course' ? <span>{bachelors} курсов</span>
                      : programType === 'profession' ? <span>{bachelors} программы</span>
                      : programType === 'practicalTrainings' ? <span>{bachelors} ступени</span>
                      : ''
                      }
                    </div>
                  </div>
                  <div className={stls.icon}>
                    <IconNavigation hover={hoveredIcon?.icon === icon}>
                      {icon}
                    </IconNavigation>
                  </div>
                </div>
              </Link>
            )}
            </div>
            <div className={stls.linkPrograms}>
              <Link href={routes.front.programs} passHref>
                <div className={stls.linkText}>
                  Все программы
                  <span> {programs}</span>
                </div>
              </Link>
            </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default DirectionsNew
