import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { TypePageProgramProps } from '@/types/index'
import { revalidate, routes } from '@/config/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { PageBachelor, PagesProgram } from '@/components/pages'
import { SeoPagesProgram } from '@/components/seo'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import apolloClient from '@/lib/apolloClient'

const BachelorPage = ({
bachelor
}) => {

  return (
    <>
        <PageBachelor bachelor={bachelor} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.bachelor })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.bachelor })

export default BachelorPage