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
import useBreadcrumbs from '@/hooks/general/useBreadcrumbs'

type Props = {
  lectorium: Lectorium
}

const PageLectorium = ({ lectorium }: Props) => {
  const segments = ['lectorium']
  const labels = ['Семинары по психологии']
  const slugs = ['lectorium']

  const breadcrumbs = useBreadcrumbs(segments, labels, slugs)

  return (
    <div className={stls.container}>
      <LectoriumHero lectorium={lectorium} breadcrumbs={breadcrumbs} />
      <Speaker speaker={lectorium.speaker} />
      <Advantages />
      <LectoriumWhoIsEventFor />
      <LectoriumWhatYouWillLearn
        whatYouWillLearn={lectorium.whatYouWillLearn}
      />
      <DownloadProgram lectorium={lectorium} />
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
    </div>
  )
}

export default PageLectorium
