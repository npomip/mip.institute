import {
  HeroProgram,
  Desc,
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

const PagesProgram = ({ program }) => {
  console.log(program)
  return (
    <>
      <HeroProgram />
      <Desc />
      <WhatYouWillLearn />
      <ForWhom />
      <YourDiploma />
      <BriefProgramContents />
      <FullProgram />
      <YourResume />
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={'Забронируйте программу по спеццене — со скидкой 30%'}
        btn={'Забронировать'}
      />
      <Teachers />
      <HelpWithEmployment />
      <YourFutureJob />
      <StudyCost />
      <Faq />
    </>
  )
}

export default PagesProgram
