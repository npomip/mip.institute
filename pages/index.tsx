import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeHome } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
// import { handleGetStaticProps } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
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

const HomePage: NextPage<TypePageDefaultProps> = ({ programs, reviews }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`${companyName} | Онлайн-институт психологии | Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами
        `}
        description={truncate(
          `✅ Самые востребованные направления; ✅ Есть гос. аккредитация и сертификаты; ✅ Помощь в трудоустройстве; ✅ Онлайн обучение; ✅ Дипломы котируются по всему миру; ✅ Спикеры практики и имеют ученые степени`,
          120
        )}
        canonical={`${routesFront.root}${routeHome}`}
      />
      <Hero />
      <Programs withTitle withBtn max={8} />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <Reviews reviews={reviews} />
      {/* <Webinars /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.home })

export default HomePage
