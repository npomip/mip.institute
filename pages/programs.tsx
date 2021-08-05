import HeroPrograms from '@/components/sections/HeroPrograms'
import FilterSearch from '@/components/sections/FilterSearch'
import Programs from '@/components/sections/Programs'
import ContactForm from '@/components/sections/ContactForm'

const Home = ({ programs }) => {
  return (
    <>
      <HeroPrograms />
      <FilterSearch />
      <Programs titleless />
      <ContactForm />
    </>
  )
}

export async function getStaticProps() {
  // const res = await fetch(`${server}${apiProgramsReqUrl}`)
  // const { data } = await res.json()
  const data = ''

  return {
    props: {
      programs: data
    }
  }
}

export default Home
