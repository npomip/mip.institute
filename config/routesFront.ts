import { dev } from '@/config/index'

const routesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mip.institute',
  home: '/',
  docs: '/docs'
}

export default routesFront
