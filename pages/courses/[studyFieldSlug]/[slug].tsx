import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'
import {
  fetchPrograms,
  getProgram,
  handleGetStaticPathsPrograms,
  handleGetStaticProps
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, revalidate } from '@/config/index'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesProgram } from '@/components/pages'

const CoursePage = ({ programs, program, studyFieldSlug }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setPrograms(programs)
    setProgram(program)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, program, studyFieldSlug])

  //

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

export const getStaticProps = async ({ params: { slug, studyFieldSlug } }) =>
  await handleGetStaticProps({
    page: '/programs',
    studyFieldSlug,
    slug,
    type: 'course'
  })

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/course' })

export default CoursePage
