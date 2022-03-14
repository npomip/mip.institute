import { TypeGeneralRoutesFront } from '@/types/index'
import { dev } from '@/config/index'

const routesFront: TypeGeneralRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mip.institute',
  home: '/',
  webinars: '/webinars',
  teachers: '/teachers',
  about: '/about',
  reviews: '/reviews',
  legal: '/legal',
  payment: '/payment',
  contact: '/contact',
  docs: '/docs',
  docsConstituent: '/docs/constituent',
  docsRegulations: 'docs/regulations',
  docsGeneral: '/docs/general'
}

export default routesFront
