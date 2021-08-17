const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const frontRootUrl = dev
  ? process.env.DEV_ROOT_FRONT_URL
  : process.env.PROD_ROOT_FRONT_URL

const backRootUrl = dev
  ? process.env.DEV_ROOT_BACK_URL
  : process.env.PROD_ROOT_BACK_URL

const programsUrl = '/programs'

const gtmId = ''

const themeColor = '#6f01c6'

export { dev, prod, frontRootUrl, backRootUrl, programsUrl, gtmId, themeColor }
