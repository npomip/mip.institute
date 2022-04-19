import { GetStaticProps, NextPage } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { MeetYourTeachers } from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const TeachersPage: NextPage<TypePageTeachersProps> = ({
  programs,
  teachers
}) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [programs])

  const seoParams = {
    title: `Преподаватели | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${teachers[0].name}, ${teachers[0].achievements} | ${teachers[1].name}, ${teachers[1].achievements}`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.teachers}`
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
      <MeetYourTeachers teachers={teachers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.teachers })

export default TeachersPage
