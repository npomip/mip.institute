import PageLectorium from '@/components/pages/PageLectorium'
import routes from '@/config/routes'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

type Props = {
  lectorium: Lectorium
}

const LectoriumPage = ({ lectorium }: Props) => {
  return (
    <>
      <NextSeo nofollow={true} noindex={true} />
      <PageLectorium lectorium={lectorium} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.lectorium })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectorium })

export default LectoriumPage
