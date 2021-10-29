import stls from '@/styles/pages/Payment.module.sass'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routePayment } from '@/data/routes'
import companyName from '@/data/companyName'
import { fetchPrograms } from '@/helpers/index'
import PageTitle from '@/components/layout/PageTitle'
import {
  PaymentBtns,
  PaymentDebitCard,
  PaymentInfo
} from '@/components/sections'

const PaymentPage = ({ programs }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
      <NextSeo
        title={`Оплата | ${companyName}`}
        description={truncate(
          `VISA International, Mastercard Worldwide, JCB, МИР`,
          120
        )}
        canonical={`${frontRootUrl}${routePayment}`}
      />
      <PageTitle>Оплата</PageTitle>
      <PaymentDebitCard />
      <PaymentInfo />
      <PaymentBtns />
    </>
  )
}

export async function getStaticProps(context) {
  const programs = await fetchPrograms()

  return {
    props: {
      programs
    },
    revalidate: revalidate.default
  }
}

export default PaymentPage
