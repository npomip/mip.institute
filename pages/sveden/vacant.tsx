import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Vacant from '@/components/sveden/Vacant/Vacant'

const VacantPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Vacant />
      </SvedenSkeleton>
    </>
  )
}

export default VacantPage
