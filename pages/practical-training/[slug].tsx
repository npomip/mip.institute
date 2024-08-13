import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { revalidate, routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { PageBachelor, PagesProgram } from '@/components/pages'

const BachelorPage = ({
practicalTraining
}) => {
  console.log(practicalTraining);
  

  // http://localhost:3000/practical-training/first-step

  return (
    <>
        {/* <PageBachelor /> */}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.practicalTraining })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.practicalTraining })

export default BachelorPage