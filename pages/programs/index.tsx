import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routePrograms } from '@/data/routes'
import companyName from '@/data/companyName'
import { PagesPrograms } from '@/components/pages'

const ProgramsPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [programs])

  return (
    <>
      <NextSeo
        title={`Все программы | ${companyName}`}
        description={truncate(
          `Профессии - длинные программы для полного погружения в направление. Курсы - короткие программы, чтобы изучить один конкретный навык`,
          120
        )}
        canonical={`${frontRootUrl}${routePrograms}`}
      />
      <PagesPrograms />
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

export default ProgramsPage
