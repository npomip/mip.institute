import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Inter from '@/components/sveden/Inter/Inter'

const InterPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Inter />
      </SvedenSkeleton>
    </>
  )
}

export default InterPage
