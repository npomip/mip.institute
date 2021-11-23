import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'
import {
  fetchPrograms,
  getProgram,
  handleGetStaticPathsPrograms
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

export async function getStaticProps({ params: { slug, studyFieldSlug } }) {
  const programs = await fetchPrograms()
  const program = getProgram({ data: programs, ofType: 'course', slug })

  return {
    props: {
      programs,
      program,
      studyFieldSlug
    },
    revalidate: revalidate.default
  }
}

export const getStaticPaths = async () =>
  await handleGetStaticPathsPrograms({ type: '/course' })

export default CoursePage
