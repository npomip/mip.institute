import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import {
  handleGetStaticProps,
  handleGetStaticPathsStudyFields
} from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProgramsStudyFieldPage = ({ programs, studyFieldSlug }) => {
  const {
    setPrograms,
    setCurProgramsType,
    setCurProgramsStudyFieldSlug,
    studyFields
  } = useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Программы'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Все направления | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление. Курсы - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${routesFront.root}${routePrograms}/${studyFieldSlug}`}
      />
      <PagesPrograms />
    </>
  )
}

export const getStaticProps = async ({ params: { studyFieldSlug } }) =>
  await handleGetStaticProps({ page: '/programs', studyFieldSlug })

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields()

export default ProgramsStudyFieldPage
