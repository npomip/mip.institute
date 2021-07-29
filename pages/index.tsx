import Hero from '@/components/sections/Hero'
import WhyBother from '@/components/sections/WhyBother'
import About from '@/components/sections/About'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import Programs from '@/components/sections/Programs'
import ChooseProgram from '@/components/sections/ChooseProgram'
import Reviews from '@/components/sections/Reviews'
import Webinars from '@/components/sections/Webinars'

const Home = ({ programs }) => {
  return (
    <>
      <Hero />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Programs />
      <ChooseProgram />
      <Reviews />
      <Webinars />
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
