import { TypeLibProgram } from '@/types/index'
import { FC } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company, themeColor, dev } from '@/config/index'
import { AdditionalRobotsProps } from 'next-seo/lib/types'
import preview from '@/config/preview'

type TSeoPagesProgram = {
  program: {
    seo: {
      canonicalURL: string
      isSEOFriendly: boolean
      metaDescription: string
      metaTitle: string
      
    }
    title: string
  }
  
}

const SeoPagesBachelor: FC<TSeoPagesProgram> = ({
  program
}) => {
  // TODO: pull the rest of SEO params from API

  const seo = program.seo

  const additionalMetaRobotsKeys = [
    'nosnippet',
    'maxSnippet',
    'maxImagePreview',
    'maxVideoPreview',
    'noarchive',
    'unavailableAfter',
    'noimageindex',
    'notranslate'
  ]
  // const parsedMetaRobots = ((
  //   seo?.metaRobots &&
  //   seo?.metaRobots.split(',').map(item => {
  //     const trimmedItem = item?.trim()

  //     if (additionalMetaRobotsKeys.some(key => trimmedItem?.includes(key))) {
  //       const [key, value] = trimmedItem?.split(':')

  //       return { [key]: value || true }
  //     }

  //     return null
  //   })
  // )?.filter(item => item) || null) as AdditionalRobotsProps


  const isNoindex = !seo?.isSEOFriendly 

  const isNofollow = !seo?.isSEOFriendly 

  const seoParams = {
    title: seo?.metaTitle ,
    programTitle: program?.title || 'Программа Высшего Образования',
    desc: seo?.metaDescription ,
    canonical: seo?.canonicalURL 
  }

  console.log(seoParams);
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview ? true : isNofollow}
        noindex={preview ? true : isNoindex}
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
        provider={{
          name: company.name,
          url: seoParams.canonical
        }}
      />
    </>
  )
}

export default SeoPagesBachelor

