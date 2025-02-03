import stls from '@/styles/pages/PageVacancies.module.sass'
import VacanciesDynamicZones from '../vacancies/VacanciesDynamicZones'
import VacanciesForm from '@/components/sections/Vacancies/VacanciesForm/VacanciesForm'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import Wrapper from '@/ui/Wrapper'
import TopBlockParallax from '../vacancies/TopBlockParallax/TopBlockParallax'


const PageVacancies = ({ vacancies }) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  return (
    <div className={stls.container}>
      <TopBlockParallax props={vacancies.hero} />
      {vacancies?.blocks?.map((module, idx) => <VacanciesDynamicZones key={idx} props={module} />)}

      {isMobileAndTabletLayout ? (
        <VacanciesForm />
      ) : (
        <Wrapper>
          <VacanciesForm />
        </Wrapper>
      )}
    </div>
  )
}
export default PageVacancies
