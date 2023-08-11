import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'

const CoursePage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  reviews,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    programs,
    program,
    curProgramsType: 'course',
    curProgramsStudyFieldSlug: studyFieldSlug
  })
  const programOverview = program.programOverview
  return (
    <>
      <SeoPagesProgram
        program={program}
        ofType='course'
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesProgram programOverview={programOverview} reviews={reviews} ofType={'course'} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.program, type: 'Course' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    context,
    page: routes.front.program,
    type: 'Course'
  })

export default CoursePage
