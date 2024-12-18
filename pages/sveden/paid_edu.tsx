import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import PaidEdu from '@/components/sveden/PaidEdu/PaidEdu'

const PaidEduPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <PaidEdu />
      </SvedenSkeleton>
    </>
  )
}

export default PaidEduPage
