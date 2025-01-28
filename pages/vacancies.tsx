import PageVacancies from '@/components/pages/PageVacancies'
import { getStaticPropsVacancies } from '@/lib/handlers/getStaticPropsVacancies'
import { GetStaticProps } from 'next'

const VacanciesIndexPage = ({ vacancies }) => {
  console.log(vacancies);
  

  return <PageVacancies vacancies={vacancies}/>
}

export const getStaticProps: GetStaticProps = async () =>
  await getStaticPropsVacancies()
export default VacanciesIndexPage
