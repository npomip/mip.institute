import { GetStaticProps, NextPage } from 'next'
import { TypePageWebinarsProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { WebinarsAlt } from '@/components/sections'
import ProgramsContext from '@/context/programs/programsContext'
import { SeoOrganizationJsonLd } from '@/components/seo'

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
  }, [programs])

  const seoParams = {
    title: `Вебинары | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${webinars[webinars.length - 1].title}, ${
        webinars[webinars.length - 1].name
      } | ${webinars[webinars.length - 2].title}, ${
        webinars[webinars.length - 2].name
      }`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.webinars}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <WebinarsAlt webinars={webinars} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.webinars })

export default WebinarsPage
