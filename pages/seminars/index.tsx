import Wrapper from '@/ui/Wrapper'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

const CoursesPage = ({ events }) => {
  return (
    <Wrapper>
      <NextSeo nofollow={true} noindex={true} />
      <h1>Семинары</h1>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.seminars })

export default CoursesPage
