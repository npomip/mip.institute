import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { PagesPrograms } from '@/components/pages'

const ProfessionsStudyFieldPage: NextPage<TypePageProgramsProps> = ({
  programs,
  studyFieldSlug
}) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(studyFieldSlug)
  }, [programs, studyFieldSlug])

  return (
    <>
      <PagesPrograms ofType='profession' />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({
    page: routes.front.programs,
    type: 'Profession'
  })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.programs })

export default ProfessionsStudyFieldPage
