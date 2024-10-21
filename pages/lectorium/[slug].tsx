import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions'
import ReviewsWithStars from '@/components/sections/lectorium/ReviewsWithStars'
import LectoriumCertificate from '@/components/sections/lectorium/LectoriumCertificate'
import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import { NextSeo } from 'next-seo'
import Maps from '@/components/sections/lectorium/Maps'
import LectoriumHowGoesClasses from '@/components/sections/lectorium/LectoriumHowGoesClasses'
import LectoriumWhatYouWillLearn from '@/components/sections/lectorium/LectoriumWhatYouWillLearn'
import props from 'constants/lectorium'

const LectoriumPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LectoriumWhatYouWillLearn whatYouWillLearn={props.whatYouWillLearn} />
      <DownloadProgram />
      <LectoriumCertificate />
      <LectoriumHowGoesClasses />
      <HaveQuestions />
      <VideoReviews />
      <ReviewsWithStars />
      <Maps />
    </>
  )
}

export default LectoriumPage
