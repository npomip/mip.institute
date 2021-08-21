import Reviews from '@/components/sections/Reviews'
import { fetchPrograms } from '@/helpers/index'

const ReviewsPage = ({ programs }) => {
  return (
    <>
      <Reviews />
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

export default ReviewsPage
