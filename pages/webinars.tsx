import { fetchPrograms, fetchWebinars } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routeWebinars } from '@/data/routes'
import companyName from '@/data/companyName'
import { WebinarsAlt } from '@/components/sections'

const WebinarsPage = ({ programs, webinars }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Вебинары | ${companyName}`}
        description={truncate(
          `${webinars[webinars.length - 1].title}, ${
            webinars[webinars.length - 1].name
          } | ${webinars[webinars.length - 2].title}, ${
            webinars[webinars.length - 2].name
          }`,
          120
        )}
        canonical={`${frontRootUrl}${routeWebinars}`}
      />
      <WebinarsAlt webinars={webinars} />
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const webinars = await fetchWebinars()

  return {
    props: {
      programs,
      webinars
    },
    revalidate: revalidate.default
  }
}

export default WebinarsPage
