import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import { NextSeo } from 'next-seo'

const LectoriumPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <DownloadProgram />
      <VideoReviews />
    </>
  )
}

export default LectoriumPage
