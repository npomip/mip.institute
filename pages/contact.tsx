import stls from '@/styles/pages/Contact.module.sass'
import { GetStaticProps, NextPage } from 'next'
import { TypePageDefaultProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routes, company } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import PageTitle from '@/components/layout/PageTitle'
import { Contacts } from '@/components/sections'
import { SeoOrganizationJsonLd } from '@/components/seo'

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
          `${company.addresses.default.city}, ${company.addresses.default.street.name} ${company.addresses.default.street.type} ${company.addresses.default.street.door}, ${company.phoneNumbers.default.val}, ${company.phoneNumbers.defaultAlt.val}, ${company.emails.default.val}`,
          120
        )}
        canonical={`${routes.front.root}${routes.front.contact}`}
      />
      <SeoOrganizationJsonLd />
      <PageTitle>Контакты</PageTitle>
      <Contacts />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routes.front.contact })

export default LegalPage
