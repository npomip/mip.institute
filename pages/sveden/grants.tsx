import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Grants from '@/components/sveden/Grants/Grants'

const GrantsPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Grants />
      </SvedenSkeleton>
    </>
  )
}

export default GrantsPage
