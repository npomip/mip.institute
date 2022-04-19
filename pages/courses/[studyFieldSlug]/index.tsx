import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeCourses } from '@/data/routes'
import { routes, company} from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { PagesPrograms } from '@/components/pages'
import ProgramsContext from '@/context/programs/programsContext'

const CoursesStudyFieldPage: NextPage<TypePageProgramsProps> = ({
  programs,
  studyFieldSlug
}) => {
  const {
    setPrograms,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    studyFields
  } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('course')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Курсы'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Курсы | ${company.name}`}
        description={truncate(
          `Курсы - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routes.front.root}${routeCourses}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='course' />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.programs, type: 'Course' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.programs })

export default CoursesStudyFieldPage
