import { TypeLibProgram } from '@/types/index'
import { FC } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'

type TSeoPagesProgram = {
  ofType: 'course' | 'profession'
  program: TypeLibProgram
  curProgramsStudyFieldSlug?: string
}

const SeoPagesProgram: FC<TSeoPagesProgram> = ({
  ofType,
  program,
  curProgramsStudyFieldSlug
}) => {
  const seoParams = {
    title: `${program?.title ? program.title + ' | ' : 'Программа | '}${
      program?.typeLabel || 'Курс'
    } | ${company.name}`,
    programTitle: program?.title || 'Программа',
    desc: truncate(program.description, 120),
    canonical: `${routes.front.root}${
      ofType === 'course'
        ? routes.front.courses
        : ofType === 'profession'
        ? routes.front.professions
        : routes.front.professions
    }/${curProgramsStudyFieldSlug}/${program.slug}`
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
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        providerName={company.name}
        providerUrl={seoParams.canonical}
      />
    </>
  )
}

export default SeoPagesProgram
