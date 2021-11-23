import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const CoursesPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(null)
  }, [programs])

  return (
    <>
      <NextSeo
        title={`Курсы | ${companyName}`}
        description={truncate(
          `Курсы - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routeCourses}`}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/programs' })

export default CoursesPage
