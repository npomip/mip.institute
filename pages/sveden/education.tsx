import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Education from '@/components/sveden/Education/Education'

const EducationPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Education />
      </SvedenSkeleton>
    </>
  )
}

export default EducationPage
