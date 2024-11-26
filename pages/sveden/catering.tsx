import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Catering from '@/components/sveden/Catering/Catering'

const CateringPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Catering />
      </SvedenSkeleton>
    </>
  )
}

export default CateringPage
