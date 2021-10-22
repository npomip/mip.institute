import stls from '@/styles/pages/Contact.module.sass'
import { revalidate } from '@/config/index'
import { fetchPrograms } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import PageTitle from '@/components/layout/PageTitle'
import Contacts from '@/components/sections/Contacts'

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
