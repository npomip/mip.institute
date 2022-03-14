import { GetStaticProps, NextPage } from 'next'
import { TypePageProgramsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { PagesPrograms } from '@/components/pages'

const ProfessionsPage: NextPage<TypePageProgramsProps> = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType('profession')
    setCurProgramsStudyFieldSlug(null)
  }, [programs])

  return (
    <>
      <NextSeo
        title={`Профессии | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление`,
          120
        )}
        canonical={`${routesFront.root}${routeProfessions}`}
      />
      <PagesPrograms ofType='profession' />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.programs })

export default ProfessionsPage
