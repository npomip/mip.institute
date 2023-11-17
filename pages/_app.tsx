import Router from 'next/router'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import MenuState from '@/context/menu/MenuState'
import FieldsTooltipState from '@/context/fieldsTooltip/FieldsTooltipState'
import { ContextStaticProps } from '@/context/index'
import { parse } from 'cookie'

import TagManager from 'react-gtm-module'

import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {
  filterProgramsByType,
  getStudyFields,
  sortBasedOnNumericOrder
} from '@/helpers/index'
import { prod, gtmId, routes } from '@/config/index'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/app.sass'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyBottom from '@/components/layout/StickyBottom'
import client from '@/lib/apolloClient'
import { getCookie, setCookie } from 'cookies-next'
import { ApolloProvider } from '@apollo/client'
import StickyBottomBlackFriday from '@/components/layout/StickyBottomBlackFriday'

const MyApp = ({ Component, pageProps, router }) => {
  const getDefaultStateProps = pageProps => {
    const program = pageProps.program || null
    const programs =
      sortBasedOnNumericOrder({ programs: pageProps.programs }) || []
    const courses =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'course' })
        : []
    const professions =
      programs?.length > 0
        ? filterProgramsByType({ programs, type: 'profession' })
        : []
    const blogs = pageProps.blogs
    const studyFields = programs?.length > 0 ? getStudyFields(programs) : []

    const studyFieldsProfessions =
      programs?.length > 0 ? getStudyFields(professions) : []

    const studyFieldsCourses =
      programs?.length > 0 ? getStudyFields(courses) : []

    const curProgramsType = pageProps.curProgramsType || null
    const curProgramsStudyFieldSlug = pageProps.studyFieldSlug || null
    const reviews = pageProps.reviews
    const searchTerm = pageProps.searchTerm || null

    const filteredPrograms = pageProps.filteredPrograms || []

    return {
      program,
      programs,
      reviews,
      courses,
      professions,
      studyFields,
      studyFieldsProfessions,
      studyFieldsCourses,
      curProgramsType,
      curProgramsStudyFieldSlug,
      searchTerm,
      filteredPrograms,
      blogs
    }
  }

  const defaultStateProps = getDefaultStateProps(pageProps)

  const [program, setProgram] = useState(defaultStateProps.program)
  const [programs, setPrograms] = useState(defaultStateProps.programs)
  const [courses, setCourses] = useState(defaultStateProps.courses)
  const [reviews, setReviews] = useState(defaultStateProps.reviews)
  const [professions, setProfessions] = useState(defaultStateProps.professions)
  const [studyFields, setStudyFields] = useState(defaultStateProps.studyFields)

  const [studyFieldsProfessions, setStudyFieldsProfessions] = useState(
    defaultStateProps.studyFieldsProfessions
  )
  const [studyFieldsCourses, setStudyFieldsCourses] = useState(
    defaultStateProps.studyFieldsCourses
  )
  const [curProgramsType, setCurProgramsType] = useState(
    defaultStateProps.curProgramsType
  )
  const [curProgramsStudyFieldSlug, setCurProgramsStudyFieldSlug] = useState(
    defaultStateProps.curProgramsStudyFieldSlug
  )
  const [searchTerm, setSearchTerm] = useState(defaultStateProps.searchTerm)
  const [filteredPrograms, setFilteredPrograms] = useState(
    defaultStateProps.filteredPrograms
  )

  const [blogs, setBlogs] = useState(defaultStateProps.blogs)

  const [loading, setLoading] = useState(false)
  //cookie for edPartners
  useEffect(() => {
    const utmCookie = getCookie('utm')
    let arr
    if (typeof utmCookie === 'string') {
      arr = JSON.parse(utmCookie)
    }

    const previousCookie = arr?.utm_source

    if (router.query.utm_source && router.query.utm_source != previousCookie) {
      const urlUtmsArr = router.asPath.split('?')[1]
      let utms = {}
      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })

      if (
        router.query.utm_source &&
        router.query.utm_source != previousCookie
      ) {
        setCookie('utm', JSON.stringify(utms), { maxAge: 7776000 })
      }
    }
  }, [router.query])
  //cookie for edPartners

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    let utms = JSON.parse(sessionStorage.getItem('utms')) || {}
    let utmsAreEmpty = false

    for (const key in utms) {
      if (utms.hasOwnProperty(key)) {
        utmsAreEmpty = true
        break
      }
    }

    if (!utmsAreEmpty) {
      const urlUtmsArr = router.asPath.split('?')[1]

      urlUtmsArr &&
        urlUtmsArr.split('&').forEach(utm => {
          utms[utm.split('=')[0]] = utm.split('=')[1]
        })
      sessionStorage.setItem('utms', JSON.stringify(utms))
    }

    const referer = sessionStorage.getItem('referrer')
    if (!referer) {
      sessionStorage.setItem('referer', JSON.stringify(document.referrer))
    }

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = () => {
      NProgress.done()
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])

  if (prod) {
    console.log = () => {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`}
        url={routes.front.root}
      />
      <ContextStaticProps.Provider
        value={{
          program,
          programs,
          courses,
          reviews,
          professions,
          studyFields,
          studyFieldsProfessions,
          studyFieldsCourses,
          curProgramsType,
          curProgramsStudyFieldSlug,
          searchTerm,
          filteredPrograms,
          blogs,
          setBlogs,
          setProgram,
          setPrograms,
          setCourses,
          setProfessions,
          setStudyFields,
          setStudyFieldsProfessions,
          setStudyFieldsCourses,
          setCurProgramsType,
          setCurProgramsStudyFieldSlug,
          setSearchTerm,
          setFilteredPrograms
        }}>
        <MenuState>
          <FieldsTooltipState>
            <Header />
            <main>
              <ApolloProvider client={client}>
              <Component {...pageProps} />
              </ApolloProvider>
            </main>
            <StickyBottomBlackFriday />
            <Footer />
          </FieldsTooltipState>
        </MenuState>
      </ContextStaticProps.Provider>
      <Script src='/assets/js/vendors/swiped-events.min.js' />
      <Script id='calltouch' src='/assets/js/vendors/calltouchScript.js' />
      {/* <Script id='botfaq' src='/assets/js/vendors/faq.js' /> */}
      <Script
        id='google tag manager'
        dangerouslySetInnerHTML={{
          __html: `
              (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({
              'gtm.start':
              new Date().getTime(),
              event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-5L6T2K77');
            `
        }}
      />
      <Script
        id='google pixel'
        dangerouslySetInnerHTML={{
          __html: `
          (function (d, w) {
            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://ngl-pixel.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
                n.parentNode.insertBefore(s, n);
        })(document, window);
            `
        }}
      />
      <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L6T2K77"
                  height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
      </noscript>
    </>
  )
}

export default MyApp
