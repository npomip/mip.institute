import PageLectorium from '@/components/pages/PageLectorium'
import SeoCommon from '@/components/seo/SeoCommon'
import routes from '@/config/routes'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'

type Props = {
  lectorium: Lectorium
}

const LectoriumPage = ({ lectorium }: Props) => {
  const title =
    lectorium.type === 'offline'
      ? `${lectorium.title} ${lectorium.subtitle}: очный семинар в Москве`
      : `${lectorium.title} ${lectorium.subtitle}: онлайн семинар`

  const desc = lectorium.seo?.metaDescription
    ? lectorium.seo.metaDescription
    : lectorium.type === 'offline'
      ? `Очный семинар на тему ${title} от Московского Института Психологии (МИП) | Актуальная информация от ведущих экспертов-психологов | Оставьте онлайн-заявку на мероприятие!`
      : `Онлайн семинар на тему ${title} от Московского Института Психологии (МИП) | Актуальная информация от ведущих экспертов-психологов | Оставьте заявку на тренинг на нашем сайте!`

  return (
    <>
      <SeoCommon seo={lectorium.seo} programTitle={title} desc={desc} />
      <PageLectorium lectorium={lectorium} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routes.front.lectorium })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ context, page: routes.front.lectorium })

export default LectoriumPage
