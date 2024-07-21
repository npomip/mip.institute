// import { NextSeo } from 'next-seo'
// import { useContext } from 'react'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
import {
  HeroPrograms,
  FilterSearch,
  Programs,
  ContactForm,
  YourDiploma,
  FullProgram,
  Teachers,
  BriefProgramContents
} from '@/components/sections'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import BachelorProgramModules from '../program/BachelorProgramModules'
import EntryForm from '../sections/EntryForm'
import LinkedPrograms from '../sections/LinkedPrograms'
import SalaryCounter from '../sections/SalaryCounter'
import TopCourses from '../sections/TopCourses'
import stls from '@/styles/pages/PageBachelor.module.sass'
import { OneNumber } from '../icons'
import TwoNumber from '../icons/TwoNumber'
import ThreeNumber from '../icons/ThreeNumber'
import FourNumber from '../icons/FourNumber'
import FourSteps from '../sections/FourSteps'
import DistanceEducation from '../sections/DistanceEducation'
import BachelorStudyCost from '../sections/BachelorStudyCost'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

// http://localhost:3000/bachelor/psihologo-pedagogicheskoye-obrazovanie

const PageBachelor = ({ bachelor }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <>
      {bachelor.title}

      <FourSteps />
      <BriefProgramContents
        coloredBackground
        planRef={null}
        program={bachelor.shortContents}
        title='Программа курса'
      />
      <LinkedPrograms
        programs={bachelor.programs}
        title={
          isMobileAndTabletLayout ? (
            <>
              <p
                style={{ color: '#6F01C6', fontWeight: 500, fontSize: '30px' }}>
                Ваша дополнительная специализация
              </p>
              <p>
                Параллельная программа профессиональной переподготовки с
                присвоением квалификации
              </p>
            </>
          ) : (
            <h2 style={{ fontSize: '35px' }}>
              <span style={{ color: '#6F01C6' }}>
                Ваша дополнительная специализация
              </span>{' '}
              (параллельная программа профессиональной переподготовки с
              присвоением квалификации)
            </h2>
          )
        }
      />
      <Teachers
        title='Преподаватели программы'
        onMain
        teachersList={bachelor.teachers}
      />
      <YourDiploma ofType='Profession' />
      <SalaryCounter />
      <DistanceEducation
        list={bachelor?.benefits}
        paddingBottom={90}
        paddingBottomMobile={60}
      />
      <BachelorStudyCost />
      <EntryForm />
      <FullProgram />
    </>
  )
}

export default PageBachelor
