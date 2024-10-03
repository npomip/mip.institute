import stls from '@/styles/pages/PageTraining.module.sass'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalBriefProgram from '../practicalTraining/PracticalBriefProgram'
import PracticalCertificate from '../practicalTraining/PracticalCertificate'
import PracticalConditions from '../practicalTraining/PracticalConditions'
import PracticalHeroProgram from '../practicalTraining/PracticalHeroProgram'
import PracticalList from '../practicalTraining/PracticalListCarousel'
import PracticalPaymentForm from '../practicalTraining/PracticalPaymentForm'
import PracticalProgramDescription from '../practicalTraining/PracticalProgramDescription'
import PracticalReviews from '../practicalTraining/PracticalReviews'
import PracticalSteps from '../practicalTraining/PracticalSteps'
import PracticalWhatInProgram from '../practicalTraining/PracticalWhatInProgram'
import PracticalWhatYouWillLearn from '../practicalTraining/PracticalWhatYouWillLearn'
import PracticalWhoIsProgramFor from '../practicalTraining/PracticalWhoIsProgramFor'
import RequirementsInProfession from '../practicalTraining/RequirementsInProfession'
import { Teachers } from '../sections'
import { SeoPageBachelor } from '../seo'

type Props = {
  practicalTraining: PracticalTraining
}

const PageTraining = ({ practicalTraining }: Props) => {
  const segments = ['practical-training']
  const labels = ['Краткосрочная ступенчатая программа']
  const slug = ['practical-training']

  const breadcrumbs = segments.map((_, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <div className={stls.pageWrapper}>
      <SeoPageBachelor program={practicalTraining} />
      <PracticalHeroProgram
        breadcrumbs={breadcrumbs}
        practicalTraining={practicalTraining}
      />
      <PracticalList list={practicalTraining?.practicalList.item} />
      <PracticalSteps />
      <PracticalWhoIsProgramFor />
      <PracticalWhatInProgram list={practicalTraining?.whatInProgram.list} />
      <PracticalProgramDescription
        description={practicalTraining?.programDescription}
        cards={practicalTraining?.descriptionCards.item}
      />
      <PracticalWhatYouWillLearn
        listLearn={practicalTraining.whatYouWillLearn}
        photo={practicalTraining.whatYouWillLearnPhoto}
      />
      <PracticalCertificate image={practicalTraining?.diploma1} />
      <PracticalBriefProgram listProgram={practicalTraining?.briefProgram} />
      <Teachers
        title={'Преподаватели'}
        teachersList={practicalTraining?.teachers}
        isExperienceHidden
        halfScreenTitle
        isWhiteBackground
        showOnMobile={false}
        isSquareBtn
        isTeacherRoundBtn={false}
      />
      <PracticalConditions />
      <PracticalReviews review={practicalTraining.review} />
      <RequirementsInProfession />

      <PracticalPaymentForm price={practicalTraining.price} />
      {/* <GeneralFaq qnas={practicalTraining.qnas} isPractical /> */}
    </div>
  )
}

export default PageTraining
