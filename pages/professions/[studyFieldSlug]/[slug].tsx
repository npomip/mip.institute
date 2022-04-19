import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { routes, revalidate } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import ProgramContext from '@/context/program/programContext'
import { PagesProgram } from '@/components/pages'

const ProfessionPage: NextPage<TypePageProgramProps> = ({
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
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, program])

  return (
    <>
      <NextSeo
        title={`${program.title} | Профессия | ${companyName}`}
        description={truncate(program.description, 120)}
        canonical={`${routes.front.root}${routeProfessions}/${studyFieldSlug}/${program.slug}`}
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
