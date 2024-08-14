import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import { NextSeo } from 'next-seo'
import PracticalList from '../practicalTraining/PracticalList'
import PracticalHeroProgram from '../practicalTraining/PracticalHeroProgram'

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
    <>
      <NextSeo nofollow={true} noindex={true} />
      <PracticalHeroProgram breadcrumbs={breadcrumbs} practicalTraining={practicalTraining}/>
      <PracticalList list={practicalTraining.practicalList.item} />
    </>
  )
}

export default PageTraining
