import { PagesPrograms } from '@/components/pages'
import { fetchPrograms } from '@/helpers/index'

const ProgramsPage = ({ programs }) => {
  return (
    <>
      <PagesPrograms programs={programs} />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default ProgramsPage
