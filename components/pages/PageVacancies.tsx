import Benefits from '@/components/sections/Vacancies/Benefits/Benefits'
import stls from '@/styles/pages/PageVacancies.module.sass'
import Values from '@/components/sections/Vacancies/Values/Values'
import VacanciesDynamicZones from '../vacancies/VacanciesDynamicZones'

const PageVacancies = ({ vacancies }) => {
  // console.log(vacancies);
  
  return (
    <div className={stls.container}>
      {vacancies?.blocks?.map((module, idx) => <VacanciesDynamicZones key={idx} props={module} />)}
    </div>
  )
}
export default PageVacancies
