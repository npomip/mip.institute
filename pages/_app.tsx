import Router from 'next/router'

import { useEffect, useState } from 'react'

import TagManager from 'react-gtm-module'

import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { motion, AnimatePresence } from 'framer-motion'

import { prod, gtmId } from '@/config/index'

import '@/styles/app.sass'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import MenuState from '@/context/menu/MenuState'

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

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
    console.log = function () {}
  }

  return (
    <>
      <MenuState>
        <DefaultSeo {...SEO} />
        <Header />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial='initial'
            animate='animate'
            transition={{ ease: 'easeInOut', duration: 0.4 }}
            exit='exit'
            variants={{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              exit: {
                opacity: 0
              }
            }}>
            <main>
              <Component {...pageProps} />
            </main>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </MenuState>
    </>
  )
}

export default MyApp
