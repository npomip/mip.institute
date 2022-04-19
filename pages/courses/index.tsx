import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeCourses } from '@/data/routes'
import companyName from '@/data/companyName'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { PagesPrograms } from '@/components/pages'

const CoursesPage: NextPage<TypePageProgramsProps> = ({ programs }) => {
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
        canonical={`${routes.front.root}${routeCourses}`}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.programs })

export default CoursesPage
