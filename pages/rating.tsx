import { NextPage } from 'next'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { lazy } from 'react'
import Rating from '@/components/rating/Rating'

const RatingPage: NextPage = ({

}) => {
  
  return (
    <>
      <SeoOrganizationJsonLd />
      <Rating />
    </>
  )
}

export default RatingPage
