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

const routes = {
  front: {
    root: dev ? 'http://localhost:3000' : 'https://mip.institute',
    home: '/',
    programs: '/programs',
    professions: '/professions',
    practice: '/practice',
    journals: '/journal',
    journal: '/journal/slug',
    seminars: '/seminars',
    seminar: '/seminars/studyField/slug',
    liveCourses: '/live-courses',
    liveCourse: '/live-courses/slug',
    bachelors: '/bachelor',
    bachelor: '/bachelor/slug',
    practicalTrainings: '/practical-training',
    practicalTraining: '/practical-training/slug',
    courses: '/courses',
    program: '/programs/studyField/slug',
    webinars: '/webinars',
    teachers: '/teachers',
    about: '/about',
    reviews: '/reviews',
    legal: '/legal',
    legal_edu: '/legal_edu',
    payment: '/payment_edu_mip',
    gratefull: '/gratefull',
    contact: '/contact',
    docs: '/docs',
    ochuvomipConstituent: '/docs/ochu-vo-mip/constituent',
    ochuvomipGeneral: '/docs/ochu-vo-mip/general',
    docsConstituent: '/docs/constituent',
    docsRegulations: 'docs/regulations',
    docsGeneral: '/docs/general',
    assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
    policiesPrivacy: '/policies/privacy.pdf',
    policiesTerms: '/policies/terms.pdf',
    policiesOferta: '/policies/oferta-mip.pdf',
    regulation: '/policies/regulation.pdf',
    yandexAnalytics: '/policies/yandexAnalytics.pdf'
  },
  back: {
    // root: dev ? 'http://localhost:1337' : 'https://api.mip.institute',
    root: dev ? 'http://localhost:1337' : 'https://api.mip.institute',
    home: '/',
    graphql: '/graphql',
    programs: '/programs', // /programs || /programs/:id
    teachers: '/teachers',
    reviews: '/reviews',
    webinars: '/webinars',
    getStaticProps: '/get-static-props', // /get-static-props/:page
    getStaticPathsStudyFields: '/get-static-paths/study-fields', // /get-static-paths/study-fields || /get-static-paths/study-fields/:type
    getStaticPathsPrograms: '/get-static-paths/programs', // /get-static-paths/programs || /get-static-paths/programs/:type
    users: '/users'
  },
  external: {
    ochuVoMipLicense: 'https://islod.obrnadzor.gov.ru/rlic/details/0B110A13-100E-130E-0C13-130F0F100E100E0F100D/',
    license:
      'https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/',
    vk: 'https://m.vk.com/mip_institute',
    whatsapp: 'http://wa.me/+74991108632',
    telegram: 'https://t.me/mip_institute',
    youtube: 'https://www.youtube.com/channel/UCGW-oYT-mquOPy6OY7R6iRA',
    ok: 'https://ok.ru/group/70000001109496',
    turtop:
      'https://tutortop.ru/school-reviews/moskovskij-institut-psihologii/?cid=1685112262621940498',
    otzovic:
      'https://otzovik.com/reviews/nano_moskovskiy_institut_psihologii_russia_moscow',
    yandex: 'https://yandex.ru/profile/-/CDfB5OYg',
    twoGis: 'https://go.2gis.com/y85xl6',
    ucheba: 'https://www.ucheba.ru/uz/107383/opinions#new-comments-panel',
    dzen: 'https://dzen.ru/institute_mip',
    eddu: 'https://eddu.pro/reviews/mip-review',
    advCake: 'https://advcake.ru/lp/mipinstitute/',
    referralProgram: 'https://mip-institute-referral.ru/',
  },
  anchors: {
    //
  }
} as const

export default routes
