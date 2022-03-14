import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront, revalidate } from '@/config/index'
import { handleGetStaticPathsPrograms } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { PagesProgram } from '@/components/pages'

const CoursePage: NextPage<TypePageProgramProps> = ({
  programs,
  program,
  studyFieldSlug
}) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, program, studyFieldSlug])

  return (
    <>
      <NextSeo
        title={`${program.title} | Курс | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routesFront.root}${routeCourses}/${studyFieldSlug}/${program.slug}`}
      />
      <PagesProgram ofType={'course'} />
    </>
  )
}

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/course' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({
    context,
    page: routesFront.program,
    type: 'Course'
  })

export default CoursePage
