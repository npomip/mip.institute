import HeroProgram from '@/components/sections/HeroProgram'
import Desc from '@/components/sections/Desc'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import WhoIsFor from '@/components/sections/WhoIsFor'
import YourDiploma from '@/components/sections/YourDiploma'
import BriefProgramContents from '@/components/sections/BriefProgramContents'

const Home = ({ programs }) => {
  return (
    <>
      <HeroProgram />
      <Desc />
      <WhatWillYouLearn />
      <WhoIsFor />
      <YourDiploma />
      <BriefProgramContents />
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
