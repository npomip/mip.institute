import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Managers from '@/components/sveden/Managers/Managers'

const ManagersPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Managers />
      </SvedenSkeleton>
    </>
  )
}

export default ManagersPage
