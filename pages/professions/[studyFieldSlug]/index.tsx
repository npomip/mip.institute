import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
import { handleGetStaticPathsStudyFields } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { PagesPrograms } from '@/components/pages'

const ProfessionsStudyFieldPage: NextPage<TypePageProgramsProps> = ({
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
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  const studyFieldLabel =
    studyFields.filter(studyField => studyField.slug === studyFieldSlug)[0]
      ?.label || 'Профессии'

  return (
    <>
      <NextSeo
        title={`${studyFieldLabel} | Профессии | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление`,
          120
        )}
        canonical={`${routesFront.root}${routeProfessions}/${studyFieldSlug}`}
      />
      <PagesPrograms ofType='profession' />
    </>
  )
}

export const getStaticPaths = async () =>
  await handleGetStaticPathsStudyFields({ type: '/profession' })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routesFront.programs })

export default ProfessionsStudyFieldPage
