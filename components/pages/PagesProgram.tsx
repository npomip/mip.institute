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
import { discount } from '@/data/price'

const PagesProgram = () => {
  return (
    <>
      <HeroProgram />
      {/* <Desc /> */}
      <WhatYouWillLearn />
      <ForWhom />
      <YourDiploma />
      <BriefProgramContents />
      <FullProgram />
      <YourResume />
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={`Забронируйте программу по спеццене — со скидкой ${discount.substring(
          1
        )}`}
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
