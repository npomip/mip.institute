import { TypeLibProgram } from '@/types/index'
import { FC } from 'react'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company, themeColor, dev } from '@/config/index'
import { AdditionalRobotsProps } from 'next-seo/lib/types'
import preview from '@/config/preview'

type TSeoPagesProgram = {
  // program: {
  //   seo: {
  //     canonicalURL: string
  //     isSEOFriendly: boolean
  //     metaDescription: string
  //     metaTitle: string
      
  //   }
  //   title: string
  // }
  
}

const SeoPagesBachelors: FC<TSeoPagesProgram> = ({
  // program
}) => {

  // const seo = program.seo

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


  // const isNoindex = !seo?.isSEOFriendly 

  // const isNofollow = !seo?.isSEOFriendly 

  const seoParams = {
    title: 'Психология: высшее образование | Программы бакалавриата' ,
    programTitle: 'Высшее образование',
    desc: 'Программы высшего образования (бакалавритат) по психологии от Московского Института Психологии (МИП) с получением диплома государственного образца | Форма обучения: дистанционно и очно.  Станьте востребованным психологом в современном ВУЗе!' ,
    canonical: 'https://mip.institute/bachelor' 
  }

  // console.log(seoParams);
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview ? true : false}
        noindex={preview ? true : false}
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

export default SeoPagesBachelors

