export default {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: process.env.PROD_ROOT_FRONT_URL,
    site_name: 'MIP'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: 'MIP',
  description: 'MIP',
  canonical: process.env.PROD_ROOT_FRONT_URL
}
