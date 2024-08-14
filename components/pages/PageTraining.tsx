import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { NextSeo } from 'next-seo'
import PracticalList from '../practicalTraining/PracticalList'

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
  console.log(practicalTraining)

  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <PracticalList
        title={'Зачем нужна практика будущему психологу во время обучения?'}
      />
    </>
  )
}

export default PageTraining
