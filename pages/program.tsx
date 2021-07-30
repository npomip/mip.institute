import HeroProgram from '@/components/sections/HeroProgram'
import Desc from '@/components/sections/Desc'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'

const Home = ({ programs }) => {
  return (
    <>
      <HeroProgram />
      <Desc />
      <WhatWillYouLearn />
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
