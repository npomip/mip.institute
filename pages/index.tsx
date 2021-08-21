import {
  Hero,
  WhyBother,
  About,
  HowProcessGoes,
  Programs,
  Cta,
  Reviews,
  Webinars
} from '@/components/sections'
import { backRootUrl, programsUrl } from '@/config/index'
import {
  getListItemsInnerHtml,
  convertMdToHtml,
  fetchPrograms
} from '@/helpers/index'
import parse from 'html-react-parser'

const HomePage = ({ programs }) => {
  // const desc = programs[1].description
  // const lis = getListItemsInnerHtml(desc)

  return (
    <>
      {/* <div>{programs.map(program => parse(program.description))}</div> */}
      <Hero />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Programs withTitle withBtn programs={programs} />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        btn={'Подобрать программу'}
      />
      <Reviews />
      <Webinars />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default HomePage
