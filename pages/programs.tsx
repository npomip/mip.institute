import HeroPrograms from '@/components/sections/HeroPrograms'
import FilterSearch from '@/components/sections/FilterSearch'
import Programs from '@/components/sections/Programs'

const Home = ({ programs }) => {
  return (
    <>
      <HeroPrograms />
      <FilterSearch />
      <Programs titleless />
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
