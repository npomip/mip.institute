import Common from '@/components/sveden/Common/Common'
import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const CommonPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Common />
      </SvedenSkeleton>
    </>
  )
}

export default CommonPage
