import { NextPage } from 'next'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { lazy } from 'react'
import Rating from '@/components/rating/Rating'
import { NextSeo } from 'next-seo'

const RatingPage: NextPage = ({

}) => {
  
  return (
    <>
    <NextSeo
        nofollow={true}
        noindex={true}

      />
      <SeoOrganizationJsonLd />
      <Rating />
    </>
  )
}

export default RatingPage
