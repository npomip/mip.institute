import Webinars from '@/components/sections/Webinars'

const WebinarsPage = ({ programs }) => {
  return (
    <>
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

export default WebinarsPage
