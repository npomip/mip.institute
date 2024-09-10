import stls from '@/styles/pages/PageTraining.module.sass'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import PracticalBriefProgram from '../practicalTraining/PracticalBriefProgram'
import PracticalCertificate from '../practicalTraining/PracticalCertificate'
import PracticalCourseResult from '../practicalTraining/PracticalCourseResult'
import PracticalHeroProgram from '../practicalTraining/PracticalHeroProgram'
import PracticalList from '../practicalTraining/PracticalListCarousel'
import PracticalPaymentForm from '../practicalTraining/PracticalPaymentForm'
import PracticalProgramDescription from '../practicalTraining/PracticalProgramDescription'
import PracticalStripe from '../practicalTraining/PracticalStripe'
import PracticalWhatInProgram from '../practicalTraining/PracticalWhatInProgram'
import PracticalWhatYouWillLearn from '../practicalTraining/PracticalWhatYouWillLearn'
import PracticalWhoIsProgramFor from '../practicalTraining/PracticalWhoIsProgramFor'
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
      <PracticalWhoIsProgramFor />
      <PracticalWhatInProgram list={practicalTraining?.whatInProgram.list} />
      <PracticalProgramDescription
        description={practicalTraining?.programDescription}
        cards={practicalTraining?.descriptionCards.item}
      />
      <PracticalStripe />
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
        isSquareBtn
        isTeacherRoundBtn={false}
        titlePaddingLeft={70}
      />
      <PracticalCourseResult results={practicalTraining?.courseResult.list} />
      <PracticalPaymentForm price={practicalTraining.price} />
      {/* <GeneralFaq qnas={practicalTraining.qnas} /> */}
    </div>
  )
}

export default PageTraining
