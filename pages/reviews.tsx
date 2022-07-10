import { GetStaticProps, NextPage } from 'next'
import { TypePageReviewsProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import Reviews from '@/components/sections/Reviews'
import { SeoOrganizationJsonLd } from '@/components/seo'

const ReviewsPage: NextPage<TypePageReviewsProps> = ({ programs, reviews }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Отзывы и статьи наших студентов | ${company.desc} | ${company.name}
    `,
    desc: truncate(
      `${reviews[reviews.length - 1].title}, ${
        reviews[reviews.length - 1].name
      } | ${reviews[reviews.length - 2].title}, ${
        reviews[reviews.length - 2].name
      }`,
      120
    ),
    canonical: `${routes.front.root}${routes.front.reviews}`
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
      <Reviews standalone reviews={reviews} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.reviews })

export default ReviewsPage
