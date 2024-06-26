import { TypeLibPrograms } from '@/types/index'
import { FC } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company, preview } from '@/config/index'
import { getStudyFields } from '@/helpers/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { useRouter } from 'next/router'
import getSeoTitle from '../funcs/getSeoTitle'
import getSeoDescription from '../funcs/getSeoDescription'

type TSeoPagesProgram = {
  curProgramsStudyFieldSlug?: string
  programs: TypeLibPrograms | null
}

const SeoPagesPrograms: FC<TSeoPagesProgram> = ({
  programs
}) => {
  const { asPath, query } = useRouter()

  const { ofType, studyFieldSlug, filter, opened} = query

  console.log(query);
  

  const seoParams = {
    title: getSeoTitle(ofType, studyFieldSlug),
    desc: getSeoDescription(ofType, studyFieldSlug),

    canonical: asPath.includes('dietologiya') ? `${routes.front.root}/professions/dietologiya-i-nutriciologiya` : `${routes.front.root}${asPath}`,
    
    }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={preview || filter || opened ? true : false}
        noindex={preview || filter || opened ? true : false}
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
          site_name: company.name,
          
        }}
      />
      <SeoOrganizationJsonLd />
    </>
  )
}

export default SeoPagesPrograms
