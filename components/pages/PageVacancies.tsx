import Benefits from '@/components/sections/Vacancies/Benefits/Benefits'
import stls from '@/styles/pages/PageVacancies.module.sass'
import Values from '@/components/sections/Vacancies/Values/Values'
import VacanciesDynamicZones from '../vacancies/VacanciesDynamicZones'
import TopBlockParallax from '../vacancies/TopBlockParallax/TopBlockParallax'

const PageVacancies = ({ vacancies }) => {
  return (
    <div className={stls.container}>
      <TopBlockParallax props={vacancies.hero} />
      {vacancies?.blocks?.map((module, idx) => <VacanciesDynamicZones key={idx} props={module} />)}
    </div>
  )
}
export default PageVacancies
