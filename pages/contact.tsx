import stls from '@/styles/pages/Contact.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeContact } from '@/data/routes'
import { city, street } from '@/data/location'
import { number, numberAlt } from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import PageTitle from '@/components/layout/PageTitle'
import { Contacts } from '@/components/sections'

const LegalPage: NextPage<TypePageDefaultProps> = ({ programs }) => {
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
        title={`Контакты | ${company.name}`}
        description={truncate(
          `${city}, ${street}, ${number}, ${numberAlt}, ${email}`,
          120
        )}
        canonical={`${routes.front.root}${routeContact}`}
      />
      <PageTitle>Контакты</PageTitle>
      <Contacts />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.contact })

export default LegalPage
