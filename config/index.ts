const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const frontRootUrl = dev ? 'http://localhost:3000' : 'https://mip.institute'

const backRootUrl = dev
  ? process.env.DEV_ROOT_BACK_URL
  : process.env.PROD_ROOT_BACK_URL

const programsUrl = '/programs'

const gtmId = ''

const base64pixel =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

const themeColor = '#6f01c6'

const revalidate = {
  default: 60,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
  secound: 1
}

export {
  dev,
  prod,
  frontRootUrl,
  backRootUrl,
  programsUrl,
  gtmId,
  base64pixel,
  themeColor,
  revalidate
}
