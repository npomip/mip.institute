import stls from '@/styles/components/sections/About.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import AboutLeaf from '@/components/general/AboutLeaf'

const About = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <AboutLeaf />
        <div></div>
      </Wrapper>
    </section>
  )
}

export default About
