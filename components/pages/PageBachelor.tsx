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
  Teachers
} from '@/components/sections'
import { FilterProvider } from '@/context/FilterContext/FilterContext'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { getUniqueCategories } from '../funcs/getUniqueCategories'
import ProgramsFilters from '../layout/ProgramsFilters'
import EntryForm from '../sections/EntryForm'
import LinkedPrograms from '../sections/LinkedPrograms'
import SalaryCounter from '../sections/SalaryCounter'
import TopCourses from '../sections/TopCourses'
// import { SeoOrganizationJsonLd } from '@/components/seo'

type PagesProgramsType = {
  ofType?: 'course' | 'profession'
}

// http://localhost:3000/bachelor/psihologo-pedagogicheskoye-obrazovanie

const PageBachelor = ({ bachelor }) => {
  console.log(bachelor)

  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <>
      {bachelor.title}
      <LinkedPrograms
        programs={bachelor.programs}
        title={
          isMobileAndTabletLayout ? (
            <>
              <p style={{'color': '#6F01C6', 'fontWeight': 500, 'fontSize': '30px'}}>Ваша дополнительная специализация</p>
              <p>Параллельная программа профессиональной переподготовки с
              присвоением квалификации</p>
            </>
          ) : (
            <h2 style={{'fontSize': '35px'}}>
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

      <EntryForm />
      <FullProgram />
    </>
  )
}

export default PageBachelor
