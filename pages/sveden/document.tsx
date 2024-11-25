import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Documents from '@/components/sveden/Documents/Documents'

const DocumentsPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Documents />
      </SvedenSkeleton>
    </>
  )
}

export default DocumentsPage
