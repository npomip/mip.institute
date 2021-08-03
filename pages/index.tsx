import Hero from '@/components/sections/Hero'
import WhyBother from '@/components/sections/WhyBother'
import About from '@/components/sections/About'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import Programs from '@/components/sections/Programs'
import Cta from '@/components/sections/Cta'
import Reviews from '@/components/sections/Reviews'
import Webinars from '@/components/sections/Webinars'
import Teachers from '@/components/sections/Teachers'
import YourDiploma from '@/components/sections/YourDiploma'

const Home = ({ programs }) => {
  return (
    <>
      <Hero />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Programs />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        btn={'Подобрать программу'}
      />
      <Reviews />
      <Webinars />
      <Teachers />
      <YourDiploma />
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
