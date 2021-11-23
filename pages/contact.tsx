import stls from '@/styles/pages/Contact.module.sass'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, revalidate } from '@/config/index'
import { routeContact } from '@/data/routes'
import companyName from '@/data/companyName'
import PageTitle from '@/components/layout/PageTitle'
import { Contacts } from '@/components/sections'
import { city, street } from '@/data/location'
import { number, numberAlt } from '@/data/contact'
import { email, emailAlmaty } from '@/data/email'

const LegalPage = ({ programs }) => {
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
        title={`Контакты | ${companyName}`}
        description={truncate(
          `${city}, ${street}, ${number}, ${numberAlt}, ${email}`,
          120
        )}
        canonical={`${routesFront.root}${routeContact}`}
      />
      <PageTitle>Контакты</PageTitle>
      <Contacts />
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

export default LegalPage
