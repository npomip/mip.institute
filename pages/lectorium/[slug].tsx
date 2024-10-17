import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions'
import ReviewsWithStars from '@/components/sections/lectorium/ReviewsWithStars'
import LectoriumCertificate from '@/components/sections/lectorium/LectoriumCertificate'
import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import { NextSeo } from 'next-seo'

const LectoriumPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <DownloadProgram />
      <LectoriumCertificate />
      <VideoReviews />
      <HaveQuestions />
      <ReviewsWithStars />
    </>
  )
}

export default LectoriumPage
