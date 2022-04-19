import { GetStaticProps, NextPage } from 'next'
import { TypePageWebinarsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { WebinarsAlt } from '@/components/sections'
import ProgramsContext from '@/context/programs/programsContext'

const WebinarsPage: NextPage<TypePageWebinarsProps> = ({
  programs,
  webinars
}) => {
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
        title={`Вебинары | ${company.name}`}
        description={truncate(
          `${webinars[webinars.length - 1].title}, ${
            webinars[webinars.length - 1].name
          } | ${webinars[webinars.length - 2].title}, ${
            webinars[webinars.length - 2].name
          }`,
          120
        )}
        canonical={`${routes.front.root}${routes.front.webinars}`}
      />
      <WebinarsAlt webinars={webinars} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.webinars })

export default WebinarsPage
