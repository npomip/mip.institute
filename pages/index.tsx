import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'

const Home = ({ programs }) => {
  return (
    <>
      {/* <Hero /> */}
      <Reviews />
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
