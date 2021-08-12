import Reviews from '@/components/sections/Reviews'

const ReviewsPage = ({ programs }) => {
  return (
    <>
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

export default ReviewsPage
