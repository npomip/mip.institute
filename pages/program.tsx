import HeroProgram from '@/components/sections/HeroProgram'

const Home = ({ programs }) => {
  return (
    <>
      <HeroProgram />
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
