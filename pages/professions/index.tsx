import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { fetchPrograms } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routeProfessions } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProfessionsPage = ({ programs }) => {
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
        canonical={`${frontRootUrl}${routeProfessions}`}
      />
      <PagesPrograms ofType='profession' />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    },
    revalidate: revalidate.default
  }
}

export default ProfessionsPage
