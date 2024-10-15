import Rating from '@/components/sections/Rating'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const RatingPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SeoOrganizationJsonLd />
      <Rating />
    </>
  )
}

export default RatingPage
