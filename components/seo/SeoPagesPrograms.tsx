import { TypeLibPrograms } from '@/types/index'
import { FC } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { getStudyFields } from '@/helpers/index'
import { SeoOrganizationJsonLd } from '@/components/seo'

type TSeoPagesProgram = {
  ofType?: 'course' | 'profession'
  curProgramsStudyFieldSlug?: string
  programs: TypeLibPrograms | null
}

const SeoPagesPrograms: FC<TSeoPagesProgram> = ({
  ofType,
  curProgramsStudyFieldSlug,
  programs
}) => {
  const studyFields = getStudyFields(programs)
  const studyFieldLabel =
    studyFields.filter(
      studyField => studyField.slug === curProgramsStudyFieldSlug
    )[0]?.label || 'Программы'

  const seoParams = {
    title: `${curProgramsStudyFieldSlug ? `${studyFieldLabel} | ` : ''}${
      ofType === 'course'
        ? 'Курсы'
        : ofType === 'profession'
        ? 'Профессии'
        : 'Все направления'
    } | ${company.name}`,
    desc: truncate(
      ofType === 'course'
        ? 'Курсы - короткие программы, чтобы изучить один конкретный навык'
        : ofType === 'profession'
        ? 'Профессии - длинные программы для полного погружения в направление'
        : 'Профессии - длинные программы для полного погружения в направление. Курсы - короткие программы, чтобы изучить один конкретный навык',
      120
    ),
    canonical: `${routes.front.root}${routes.front.programs}`
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
    </>
  )
}

export default SeoPagesPrograms
