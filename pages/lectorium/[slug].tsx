import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import { NextSeo } from 'next-seo'

const LectoriumPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <h1>Лекториум</h1>
      <VideoReviews />
    </>
  )
}

export default LectoriumPage
