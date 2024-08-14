import { NextSeo } from 'next-seo'

const PageTraining = ({ practicalTraining }) => {
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
    </>
  )
}

export default PageTraining
