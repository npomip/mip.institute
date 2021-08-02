import HeroProgram from '@/components/sections/HeroProgram'
import Desc from '@/components/sections/Desc'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import WhoIsFor from '@/components/sections/WhoIsFor'
import YourDiploma from '@/components/sections/YourDiploma'
import BriefProgramContents from '@/components/sections/BriefProgramContents'
import FullProgram from '@/components/sections/FullProgram'
import YourResume from '@/components/sections/YourResume'
import Cta from '@/components/sections/Cta'
import YourFutureJob from '@/components/sections/YourFutureJob'
import StudyCost from '@/components/sections/StudyCost'

const Home = ({ programs }) => {
  return (
    <>
      <HeroProgram />
      <Desc />
      <WhatWillYouLearn />
      <WhoIsFor />
      <YourDiploma />
      <BriefProgramContents />
      <FullProgram />
      <YourResume />
      <Cta
        title={'Начните обучаться со скидкой'}
        desc={'Забронируйте программу по спеццене — со скидкой 30%'}
        btn={'Забронировать'}
      />
      <YourFutureJob />
      <StudyCost />
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
