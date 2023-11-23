import stls from '@/styles/pages/GratefullPage.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { useHandleContextStaticProps } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'
import Gratefull from '@/components/sections/Gratefull'

const PaymentPage = ( ) => {

  return (
    <>
      {/* <p>404</p> */}
    </>
  )
}


export default PaymentPage
