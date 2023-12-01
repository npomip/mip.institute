import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesPrograms } from '@/components/pages'
import { SeoPagesPrograms } from '@/components/seo'

const SeminarsStudyFieldPage = ({
  seminars
}) => {


  return (
    <>
      {/* <SeoPagesPrograms
        programs={programs}
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesPrograms /> */}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.seminars })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.seminars })

export default SeminarsStudyFieldPage