const dev = process.env.NODE_ENV === 'development'

const backend = dev ? 'http://localhost:5000' : 'https://ipo-cp.ru'

const frontend = dev ? 'http://localhost:3000' : 'https://mip.institute'

const gtmId = ''

const themeColor = '#ff3535'

export { dev, backend, frontend, gtmId, themeColor }
