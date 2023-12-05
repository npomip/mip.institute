import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'
import { useRouter } from 'next/router'
import Wrapper from '@/components/layout/Wrapper'

const SeminarsSlugPage = (
  { seminar }
) => {
const title = seminar[0].title
const text = seminar[0].text

  const router = useRouter();
  const {slug, studyFieldSlug} = router.query
  console.log(router,slug)

  return (
    <Wrapper>
    <p>{title}</p>
    <p>{text}</p>
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
    </Wrapper>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminar })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminar })

export default SeminarsSlugPage
