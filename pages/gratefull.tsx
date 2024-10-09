import Gratefull from '@/components/sections/Gratefull'
import { SeoOrganizationJsonLd } from '@/components/seo'
import { company, routes } from '@/config/index'
import truncate from '@/helpers/general/truncate'
import { TypePageDefaultProps } from '@/types/index'
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Script from 'next/script'

const GratefullPage: NextPage<TypePageDefaultProps> = () => {
  const router = useRouter()
  const { name, email } = router.query

  const seoParams = {
    title: `Спасибо за заявку | ${company.name}`,
    desc: truncate(
      'Есть нюансы профессии, о которых мы не пишем на сайте, заходите к нам в телеграм, пообщаемся там, ведь психолог должен обладать определенными качествами',
      120
    ),
    canonical: `${routes.front.root}${routes.front.gratefull}`
  }
  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        nofollow={true}
        noindex={true}
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
      <Script
        id='registration'
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-822792302/ktI6CJG-0toZEO6gq4gD'});
          `
        }}
      />
      <Gratefull />
      <div
        className='i-flocktory'
        data-fl-action='exchange'
        data-fl-user-name={name}
        data-fl-user-email={email}></div>
    </>
  )
}

export default GratefullPage
