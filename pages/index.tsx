import Head from 'next/head'
import Image from 'next/image'

const Home = ({ programs }) => {
  return <></>
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
