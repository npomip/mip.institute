import stls from '@/styles/components/sections/About.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import AboutLeaf from '@/components/general/AboutLeaf'
import ProsCircle from '@/components/general/ProsCircle'

const About = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.leaf}>
          <AboutLeaf />
        </div>
        <div className={stls.circle}>
          <ProsCircle />
        </div>
      </Wrapper>
    </section>
  )
}

export default About
