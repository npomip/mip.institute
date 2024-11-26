import Objects from '@/components/sveden/Objects/Objects'
import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const ObjectsPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Objects />
      </SvedenSkeleton>
    </>
  )
}

export default ObjectsPage
