import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Struct from '@/components/sveden/Struct/Struct'

const CommonPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Struct />
      </SvedenSkeleton>
    </>
  )
}

export default CommonPage
