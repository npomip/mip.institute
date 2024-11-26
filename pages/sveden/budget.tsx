import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Budget from '@/components/sveden/Budget/Budget'

const BudgetPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Budget />
      </SvedenSkeleton>
    </>
  )
}

export default BudgetPage
