import companyName from './data/companyName'
import { frontRootUrl } from './config/index'

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: frontRootUrl,
    site_name: 'MIP'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: companyName,
  description:
    'Освойте востребованную профессию психолога или повысьте квалификацию вместе с нами',
  canonical: frontRootUrl
  // dangerouslySetAllPagesToNoIndex: true,
  // dangerouslySetAllPagesToNoFollow: true
  // noindex: true,
  // nofollow: true
}

export default seo
