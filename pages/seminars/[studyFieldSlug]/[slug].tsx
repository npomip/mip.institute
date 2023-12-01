import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'

const SeminarsSlugPage = (
  {
  // seminar
}
) => {
  // console.log(seminar)

  return (
    <>
    {/* <p>{seminar.title}</p> */}
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminar })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminar })

export default SeminarsSlugPage
