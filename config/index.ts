const dev = process.env.NODE_ENV === 'development'
const prod = process.env.NODE_ENV === 'production'

const frontend = dev ? 'http://localhost:3000' : 'https://mip.institute'

const backend = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const gtmId = ''

const themeColor = '#ff3535'

export { dev, prod, frontend, backend, gtmId, themeColor }
