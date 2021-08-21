import About from '@/components/sections/About'
import { fetchPrograms } from '@/helpers/index'

const AboutPage = ({ programs }) => {
  return (
    <>
      <About />
    </>
  )
}

export async function getStaticProps() {
  // const programs = await fetchPrograms()
  const programs = []

  return {
    props: {
      programs
    }
  }
}

export default AboutPage
