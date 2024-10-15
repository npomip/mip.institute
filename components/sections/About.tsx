import stls from '@/styles/components/sections/About.module.sass'
import Wrapper from '@/ui/Wrapper'
import classNames from 'classnames'
import CommonAboutSlider from './AboutSlider/CommonAboutSlider'
import AboutList from './AboutList'

type AboutType = {
  standalone?: boolean
  isLiveCourse?: boolean
}

const About = ({ isLiveCourse = false, standalone = false }: AboutType) => {
  return (
    <section
      className={classNames({
        [stls.container]: true,
        [stls.standalone]: standalone
      })}>
      <Wrapper>
        <CommonAboutSlider isLiveCourse={isLiveCourse} />
        <AboutList isLiveCourse={isLiveCourse} />
      </Wrapper>
    </section>
  )
}

export default About
