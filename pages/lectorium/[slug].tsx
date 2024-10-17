import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions'
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
    </>
  )
}

export default LectoriumPage
