import Rating from '@/components/sections/Rating'
import { SeoOrganizationJsonLd } from '@/components/seo'
import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const CommonPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        {/* <Struct /> */}
        <p>common</p>
      </SvedenSkeleton>
    </>
  )
}

export default CommonPage
