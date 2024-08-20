import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { NextSeo } from 'next-seo'
import PracticalList from '../practicalTraining/PracticalList'
import PracticalHeroProgram from '../practicalTraining/PracticalHeroProgram'
import PracticalBriefProgram from '../practicalTraining/PracticalBriefProgram'
import stls from '@/styles/pages/PageTraining.module.sass'
import PracticalProgramDescription from '../practicalTraining/PracticalProgramDescription'
import { Teachers } from '../sections'
import PracticalCertificate from '../practicalTraining/PracticalCertificate'
import PracticalCourseResult from '../practicalTraining/PracticalCourseResult'
import PracticalWhatInProgram from '../practicalTraining/PracticalWhatInProgram'
import ThreadBlock from '../practicalTraining/ThreadBlock'
import ThreadBlockMobile from '../practicalTraining/ThreadBlockMobile'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import PracticalWhoIsProgramFor from '../practicalTraining/PracticalWhoIsProgramFor'

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
      <NextSeo nofollow={true} noindex={true} />
      <PracticalHeroProgram
        breadcrumbs={breadcrumbs}
        practicalTraining={practicalTraining}
      />
      <PracticalList list={practicalTraining?.practicalList.item} />
      <ThreadBlock points={practicalTraining.termsPoints} />
      <PracticalWhoIsProgramFor />
      <PracticalProgramDescription
        description={practicalTraining?.programDescription}
        cards={practicalTraining?.descriptionCards.item}
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
      <PracticalWhatInProgram list={practicalTraining?.whatInProgram.list}/>
    </div>
  )
}

export default PageTraining
