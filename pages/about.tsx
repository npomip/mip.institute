import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import About from '@/components/sections/About'
import { SeoOrganizationJsonLd } from '@/components/seo'
import AboutMip from '@/components/sections/AboutMip/AboutMip'
import WhoIsOurSpeakers from '@/components/sections/WhoIsOurSpeakers/WhoIsOurSpeakers'
import TeachersLineUp from '@/components/sections/TeachersLineUp/TeachersLineUp'

const AboutPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
  useHandleContextStaticProps({ programs })

  const seoParams = {
    title: `Об институте | ${company.desc} | ${company.name}
    `,
    desc: truncate(company.about, 120),
    canonical: `${routes.front.root}${routes.front.about}`
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
      {/* <About standalone /> */}
      <AboutMip />
      <WhoIsOurSpeakers />
      <TeachersLineUp />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.about })

export default AboutPage
