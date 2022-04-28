// import { useContext } from 'react'
// import { NextSeo, CourseJsonLd } from 'next-seo'
// import truncate from 'truncate'
// import { routes, company } from '@/config/index'
// import ProgramContext from '@/context/program/programContext'
// import ProgramsContext from '@/context/programs/programsContext'
import {
  HeroProgram,
  Opportunities,
  Desc,
  HowProcessGoes,
  WhatYouWillLearn,
  ForWhom,
  YourDiploma,
  BriefProgramContents,
  FullProgram,
  YourResume,
  Cta,
  Teachers,
  HelpWithEmployment,
  YourFutureJob,
  StudyCost,
  Faq
} from '@/components/sections'
import { discount } from '@/data/price'

type PagesProgramType = {
  ofType: 'course' | 'profession'
}

const PagesProgram = ({ ofType = null }: PagesProgramType) => {
  return (
    <>
      <HeroProgram />
      {/* <Opportunities /> */}
      {/* <Desc /> */}
      <WhatYouWillLearn />
      <ForWhom />
      <HowProcessGoes />
      <YourDiploma ofType={ofType} />
      <BriefProgramContents />
      <FullProgram />
      {ofType !== 'course' && <YourResume />}
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
        cta='reserve'
      />
      <Teachers />
      {/* <HelpWithEmployment /> */}
      {ofType !== 'course' && <YourFutureJob />}
      <StudyCost />
      <Faq />
    </>
  )
}

export default PagesProgram
