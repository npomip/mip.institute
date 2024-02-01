import { TypeLibProgram } from '@/types/index'
import { FC } from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routes, company, themeColor, dev } from '@/config/index'
import { AdditionalRobotsProps } from 'next-seo/lib/types'

type TSeoPagesProgram = {
  // program: TypeLibProgram
  // curProgramsStudyFieldSlug?: string
}

const SeoPagesJournal: FC<TSeoPagesProgram> = ({
  // ofType,
  // program,
  // curProgramsStudyFieldSlug
}) => {
  // TODO: pull the rest of SEO params from API

  // const { seo } = program

  // const additionalMetaRobotsKeys = [
  //   'nosnippet',
  //   'maxSnippet',
  //   'maxImagePreview',
  //   'maxVideoPreview',
  //   'noarchive',
  //   'unavailableAfter',
  //   'noimageindex',
  //   'notranslate'
  // ]
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

  // nosnippet?: boolean;
  // maxSnippet?: number;
  // maxImagePreview?: ImagePrevSize;
  // maxVideoPreview?: number;
  // noarchive?: boolean;
  // unavailableAfter?: string;
  // noimageindex?: boolean;
  // notranslate?: boolean;

  // const isNoindex = !seo?.isSEOFriendly || seo?.metaRobots?.includes('noindex')

  // const isNofollow =
  //   !seo?.isSEOFriendly || seo?.metaRobots?.includes('nofollow')

  // const seoParams = {
  //   title:
  //     seo?.metaTitle ||
  //     `${program?.title ? program.title + ' | ' : 'Программа | '}${
  //       program?.typeLabel || 'Курс'
  //     } | ${company.name}`,
  //   programTitle: program?.title || 'Программа',
  //   desc:
  //     seo?.metaDescription ||
  //     (program?.description ? truncate(program?.description, 120) : ''),
  //   canonical:
  //     seo?.canonicalURL ||
  //     `${routes.front.root}${
  //       ofType === 'course'
  //         ? routes.front.courses
  //         : ofType === 'profession'
  //         ? routes.front.professions
  //         : routes.front.professions
  //     }/${curProgramsStudyFieldSlug}/${program?.slug}`
  // }

  return (
    <>
      <NextSeo
        // title={seoParams.title}
        // description={seoParams.desc}
        // canonical={seoParams.canonical}
        // themeColor={themeColor}
        nofollow={true}
        noindex={true}
        // {...((parsedMetaRobots && { robotsProps: parsedMetaRobots }) || {})}
        // openGraph={{
        //   url: seoParams.canonical,
        //   title: seoParams.title,
        //   description: seoParams.desc,
        //   images: [
        //     {
        //       url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
        //       width: 512,
        //       height: 512,
        //       alt: company.name,
        //       type: 'image/png'
        //     }
        //   ],
        //   site_name: company.name
        // }}
      />
      {/* <ArticleJsonLd
      type="BlogPosting"
      url="https://example.com/blog"
      title="Blog headline"
      images={[
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg',
      ]}
      datePublished="2015-02-05T08:00:00+08:00"
      dateModified="2015-02-05T09:00:00+08:00"
      authorName="Jane Blogs"
      description="This is a mighty good description of this blog."
    /> */}
    </>
  )
}

export default SeoPagesJournal