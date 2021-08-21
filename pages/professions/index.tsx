import { PagesPrograms } from '@/components/pages'
import { fetchPrograms } from '@/helpers/index'

const ProfessionsPage = ({ programs }) => {
  return (
    <>
      <PagesPrograms programs={programs} />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms({ only: 'professions' })

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default ProfessionsPage
