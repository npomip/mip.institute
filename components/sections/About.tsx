import stls from '@/styles/components/sections/About.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import AboutLeaf from '@/components/general/AboutLeaf'
import ProsCircle from '@/components/general/ProsCircle'

const About = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <AboutLeaf />
        <ProsCircle />
      </Wrapper>
    </section>
  )
}

export default About
