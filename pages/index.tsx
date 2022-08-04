import { GetStaticProps, NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import {
  sortBasedOnNumericOrder,
  sortReviewsCreatedAtASC
} from '@/helpers/index'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import {
  Hero,
  WhyBother,
  About,
  HowProcessGoes,
  Programs,
  Cta,
  Reviews,
  Webinars
} from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

const HomePage: NextPage<TypePageHomeProps> = ({ programs, reviews }) => {
  useHandleContextStaticProps({ programs })

  const reviewsSorted = sortBasedOnNumericOrder({
    reviews: sortReviewsCreatedAtASC({ reviews })
  })

  const seoParams = {
    title: `${company.name} | ${company.desc} | ${company.tagline}
    `,
    desc: truncate(
      'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
      120
    ),
    canonical: routes.front.root
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <SeoOrganizationJsonLd />
      <Hero />
      <Programs withTitle withBtn max={8} />
      <WhyBother />
      <About />
      <HowProcessGoes />
      <Cta
        title={'Подберите программу'}
        desc={'Ответьте на несколько вопросов и подберите программу обучения'}
        cta='chooseProgram'
      />
      <Reviews reviews={reviewsSorted} />
      {/* <Webinars /> */}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.home })

export default HomePage
