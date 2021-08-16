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
import { getListItemsInnerHtml, convertMdToHtml } from '@/helpers/index'
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
      <Programs programs={programs} />
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
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const programs = convertMdToHtml({ arr: data, param: 'description' })

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default HomePage
