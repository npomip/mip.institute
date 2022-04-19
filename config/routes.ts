import { dev } from '@/config/index'
import { TypeGeneralRoutesFront } from '@/types/index'

type TRoutes = {
  front: TypeGeneralRoutesFront
  back: {
    [key: string]: string
  }
  external: {
    [key: string]: `https://${string}`
  }
  anchors: {
    [key: string]: `#${string}`
  }
}

const routes: TRoutes = {
  front: {
    root: dev ? 'http://localhost:3000' : 'https://mip.institute',
    home: '/',
    programs: '/programs',
    program: '/programs/studyField/slug',
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
    docsGeneral: '/docs/general',
    assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png'
  },
  back: {
    root: dev
      ? 'http://localhost:1337'
      : 'https://api-mip-institute.herokuapp.com',
    home: '/',
    graphql: '/graphql',
    programs: '/programs', // /programs || /programs/:id
    teachers: '/teachers',
    reviews: '/reviews',
    webinars: '/webinars',
    getStaticProps: '/get-static-props', // /get-static-props/:page
    getStaticPathsStudyFields: '/get-static-paths/study-fields', // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
    getStaticPathsPrograms: '/get-static-paths/programs' // /get-static-paths/programs || /get-static-paths/programs/:type
  },
  external: {
    license:
      'https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/'
  },
  anchors: {
    //
  }
}

export default routes
