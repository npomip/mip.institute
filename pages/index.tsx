import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import Reviews from '@/components/sections/Reviews'
import Webinars from '@/components/sections/Webinars'

const Home = ({ programs }) => {
  return (
    <>
      <Hero />
      <Reviews />
      <Webinars />
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
