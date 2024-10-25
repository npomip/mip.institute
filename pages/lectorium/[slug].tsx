import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions'
import ReviewsWithStars from '@/components/sections/lectorium/ReviewsWithStars'
import LectoriumCertificate from '@/components/sections/lectorium/LectoriumCertificate'
import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import { NextSeo } from 'next-seo'
import Maps from '@/components/sections/lectorium/Maps'
import LectoriumHowGoesClasses from '@/components/sections/lectorium/LectoriumHowGoesClasses'
import EventRegistration from '@/components/sections/lectorium/EventRegistration'
import LectoriumWhatYouWillLearn from '@/components/sections/lectorium/LectoriumWhatYouWillLearn'
import LectoriumFAQ from '@/components/sections/lectorium/LectoriumFAQ'
import { GetStaticPaths, GetStaticProps } from 'next'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import routes from '@/config/routes'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import LectoriumHero from '@/components/sections/lectorium/LectoriumHero'
import LectoriumWhoIsEventFor from '@/components/sections/lectorium/LectoriumWhoIsEventFor'
import Speaker from '@/components/sections/lectorium/Speaker'

type Props = {
  lectorium: Lectorium
}

const LectoriumPage = ({ lectorium }: Props) => {
  console.log(lectorium, 'lectorium')

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <LectoriumHero lectorium={lectorium} />
      <Speaker speaker={lectorium.speaker} />
      <LectoriumWhoIsEventFor />
      <LectoriumWhatYouWillLearn
        whatYouWillLearn={lectorium.whatYouWillLearn}
      />
      <DownloadProgram />
      <LectoriumCertificate />
      <LectoriumHowGoesClasses />
      <HaveQuestions />
      <VideoReviews />
      <ReviewsWithStars />
      <Maps />
      <EventRegistration />
      <LectoriumFAQ faq={lectorium?.faq} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.lectorium })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectorium })

export default LectoriumPage
