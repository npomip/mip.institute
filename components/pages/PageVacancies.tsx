import Benefits from '@/components/sections/Vacancies/Benefits/Benefits'
import stls from '@/styles/pages/PageVacancies.module.sass'
import Values from '@/components/sections/Vacancies/Values/Values'

const PageVacancies = () => {
  return (
    <div className={stls.container}>
      <Benefits />
      <Values />
    </div>
  )
}
export default PageVacancies
