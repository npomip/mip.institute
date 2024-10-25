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
import props from 'constants/lectorium'

type Props = {
  lectorium: Lectorium
}

const PageLectorium = ({ lectorium }: Props) => {
  return (
    <div className={stls.container}>
      <LectoriumHero lectorium={lectorium} />
      <Advantages />
      <LectoriumWhatYouWillLearn whatYouWillLearn={props.whatYouWillLearn} />
      <DownloadProgram />
      <LectoriumCertificate />
      <LectoriumHowGoesClasses />
      <HaveQuestions />
      <VideoReviews />
      <ReviewsWithStars />
      <Maps />
      <EventRegistration />
      <LectoriumFAQ faq={lectorium?.faq} />
    </div>
  )
}

export default PageLectorium
