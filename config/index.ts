const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const frontRootUrl = dev
  ? process.env.DEV_ROOT_FRONT_URL
  : process.env.PROD_ROOT_FRONT_URL

const backRootUrl = dev
  ? process.env.DEV_ROOT_BACK_URL
  : process.env.PROD_ROOT_BACK_URL

const gtmId = ''

const themeColor = '#ff3535'

export { dev, prod, frontRootUrl, backRootUrl, gtmId, themeColor }
