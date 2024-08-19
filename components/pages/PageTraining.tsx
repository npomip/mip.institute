import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { NextSeo } from 'next-seo'
import PracticalList from '../practicalTraining/PracticalList'
import PracticalHeroProgram from '../practicalTraining/PracticalHeroProgram'
import PracticalBriefProgram from '../practicalTraining/PracticalBriefProgram'
import stls from '@/styles/pages/PageTraining.module.sass'
import PracticalProgramDescription from '../practicalTraining/PracticalProgramDescription'
import PracticalWhatYouWillLearn from '../practicalTraining/PracticalWhatYouWillLearn'

type Props = {
  practicalTraining: PracticalTraining
}

const PageTraining = ({ practicalTraining }: Props) => {
  const segments = ['practical-training']

  const labels = ['Краткосрочная ступенчатая программа']
  const slug = ['practical-training']

  const breadcrumbs = segments.map((segment, index) => {
    const breadcrumb = {
      label: labels[index],
      path: '/' + segments[index],
      slug: slug[index]
    }
    return breadcrumb
  })

  return (
    <div className={stls.pageWrapper}>
      <NextSeo nofollow={true} noindex={true} />
      <PracticalHeroProgram
        breadcrumbs={breadcrumbs}
        practicalTraining={practicalTraining}
      />
      <PracticalList list={practicalTraining.practicalList.item} />
      <PracticalBriefProgram listProgram={practicalTraining.briefProgram} />
      <PracticalProgramDescription description={practicalTraining.programDescription} cards={practicalTraining.descriptionCards.item}/>
      <PracticalWhatYouWillLearn listLearn={practicalTraining.whatYouWillLearn} photo={practicalTraining.whatYouWillLearnPhoto}/>
    </div>
  )
}

export default PageTraining
