import Advantages from '@/components/sections/lectorium/Advantages'
import DownloadProgram from '@/components/sections/lectorium/DownloadProgram'
import EventRegistration from '@/components/sections/lectorium/EventRegistration'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions'
import LectoriumCertificate from '@/components/sections/lectorium/LectoriumCertificate'
import LectoriumFAQ from '@/components/sections/lectorium/LectoriumFAQ'
import LectoriumHero from '@/components/sections/lectorium/LectoriumHero'
import LectoriumHowGoesClasses from '@/components/sections/lectorium/LectoriumHowGoesClasses'
import LectoriumWhatYouWillLearn from '@/components/sections/lectorium/LectoriumWhatYouWillLearn'
import Maps from '@/components/sections/lectorium/Maps'
import ReviewsWithStars from '@/components/sections/lectorium/ReviewsWithStars'
import VideoReviews from '@/components/sections/lectorium/VideoReviews'
import stls from '@/styles/pages/PageLectorium.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import Speaker from '../sections/lectorium/Speaker'
import LectoriumWhoIsEventFor from '../sections/lectorium/LectoriumWhoIsEventFor'

type Props = {
  lectorium: Lectorium
}

const PageLectorium = ({ lectorium }: Props) => {
  console.log(lectorium)

  return (
    <div className={stls.container}>
      <LectoriumHero lectorium={lectorium} />
      <Speaker speaker={lectorium.speaker} />
      <Advantages />
      <LectoriumWhoIsEventFor />
      <LectoriumWhatYouWillLearn
        whatYouWillLearn={lectorium.whatYouWillLearn}
      />
      <DownloadProgram lectorium={lectorium} />
      <LectoriumCertificate />
      <LectoriumHowGoesClasses />
      <HaveQuestions />
      <VideoReviews />
      <ReviewsWithStars reviews={lectorium.reviewWithDate} />
      <Maps />
      <EventRegistration targetDate={lectorium?.targetDate} />
      <LectoriumFAQ faq={lectorium?.faq} />
    </div>
  )
}

export default PageLectorium
