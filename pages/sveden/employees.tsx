import SvedenSkeleton from '@/components/sveden/SvedenSkeleton/SvedenSkeleton'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Employees from '@/components/sveden/Employees/Employees'

const EmployeesPage: NextPage = () => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <SvedenSkeleton>
        <Employees />
      </SvedenSkeleton>
    </>
  )
}

export default EmployeesPage
