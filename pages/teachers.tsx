import { fetchPrograms, fetchTeachers } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { frontRootUrl, revalidate } from '@/config/index'
import { routeTeachers } from '@/data/routes'
import companyName from '@/data/companyName'
import { MeetYourTeachers } from '@/components/sections'

const TeachersPage = ({ programs, teachers }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  console.log(teachers)

  return (
    <>
      <NextSeo
        title={`Преподаватели | ${companyName}`}
        description={truncate(
          `${teachers[0].name}, ${teachers[0].achievements} | ${teachers[1].name}, ${teachers[1].achievements}`,
          120
        )}
        canonical={`${frontRootUrl}${routeTeachers}`}
      />
      <MeetYourTeachers teachers={teachers} />
    </>
  )
}

export async function getStaticProps() {
  const programs = await fetchPrograms()
  const teachers = await fetchTeachers()

  return {
    props: {
      programs,
      teachers
    },
    revalidate: revalidate.default
  }
}

export default TeachersPage
