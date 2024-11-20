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
import LectoriumWhoIsEventFor from '../sections/lectorium/LectoriumWhoIsEventFor'
import Speaker from '../sections/lectorium/Speaker'
import NextEvents from '../sections/lectorium/NextEvents'

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
      {lectorium.pdf && <DownloadProgram lectorium={lectorium} />}
      <LectoriumCertificate diploma={lectorium?.diploma} />
      <LectoriumHowGoesClasses />
      <HaveQuestions />
      <VideoReviews />
      <ReviewsWithStars reviews={lectorium.reviewWithDate} />
      <Maps />
      <EventRegistration
        timepadHref={lectorium?.timepadHref}
        targetDate={lectorium?.targetDate}
      />
      <LectoriumFAQ faq={lectorium?.faq} />
      {lectorium.lectoriums.length > 0 && <NextEvents lectorium={lectorium} />}
    </div>
  )
}

export default PageLectorium
