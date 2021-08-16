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

const Home = ({ programs }) => {
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

export async function getStaticProps() {
  // const res = await fetch(`${server}${apiProgramsReqUrl}`)
  // const { data } = await res.json()
  const data = ''

  return {
    props: {
      programs: data
    }
  }
}

export default Home
