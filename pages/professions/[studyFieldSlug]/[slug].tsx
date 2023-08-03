import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'

const ProfessionPage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  reviews,
  studyFieldSlug
}) => {
  useHandleContextStaticProps({
    programs,
    program,
    curProgramsType: 'profession',
    curProgramsStudyFieldSlug: studyFieldSlug
  })
  console.log('PPPPPPP', reviews)
  return (
    <>
      <SeoPagesProgram
        program={program}
        ofType='profession'
        curProgramsStudyFieldSlug={studyFieldSlug}
      />
      <PagesProgram ofType={'profession'} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.program, type: 'Profession' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    context,
    page: routes.front.program,
    type: 'Profession'
  })

export default ProfessionPage
