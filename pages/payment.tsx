import stls from '@/styles/pages/Payment.module.sass'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { routePayment } from '@/data/routes'
import companyName from '@/data/companyName'
import { handleGetStaticProps } from '@/helpers/index'
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
        canonical={`${routesFront.root}${routePayment}`}
      />
      <PageTitle>Оплата</PageTitle>
      <PaymentDebitCard />
      <PaymentInfo />
      <PaymentBtns />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/payment' })

export default PaymentPage
