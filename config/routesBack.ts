import { dev } from '@/config/index'

const routesBack = {
  root: dev ? 'http://localhost:1337' : '',
  home: '/',
  programs: '/programs',
  teachers: '/teachers',
  reviews: '/reviews',
  webinars: '/webinars',
  getStaticProps: '/get-static-props'
}

export default routesBack
