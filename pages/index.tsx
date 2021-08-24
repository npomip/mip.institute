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
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'

const HomePage = ({ programs }) => {
  const { setPrograms } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
  }, [])

  return (
    <>
      <Hero />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Programs withTitle withBtn />
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
