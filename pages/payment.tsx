import stls from '@/styles/pages/Payment.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routePayment } from '@/data/routes'
import companyName from '@/data/companyName'
import { routes } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import PageTitle from '@/components/layout/PageTitle'
import {
  PaymentBtns,
  PaymentDebitCard,
  PaymentInfo
} from '@/components/sections'

const PaymentPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
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
        canonical={`${routes.front.root}${routePayment}`}
      />
      <PageTitle>Оплата</PageTitle>
      <PaymentDebitCard />
      <PaymentInfo />
      <PaymentBtns />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.payment })

export default PaymentPage
