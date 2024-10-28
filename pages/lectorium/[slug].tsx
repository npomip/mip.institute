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

  const date = new Date(lectorium.targetDate);
  const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date);
  const dateWithTime = new Intl.DateTimeFormat("ru-RU", {
      day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
  }).format(date);
  
  const formattedDate = `${weekday.toUpperCase()},\n${dateWithTime}`;
  console.log(formattedDate);

  const time = lectorium.endTime.slice(0, 5);
  console.log(time);
  
  
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
