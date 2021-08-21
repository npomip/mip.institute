import Webinars from '@/components/sections/Webinars'
import { fetchPrograms } from '@/helpers/index'

const WebinarsPage = ({ programs }) => {
  return (
    <>
      <Webinars />
    </>
  )
}

export async function getStaticProps() {
  // const programs = await fetchPrograms()
  const programs = []

  return {
    props: {
      programs
    }
  }
}

export default WebinarsPage
