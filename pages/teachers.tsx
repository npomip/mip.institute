import { fetchPrograms, fetchTeachers } from '@/helpers/index'
import ProgramsContext from '@/context/programs/programsContext'
import { MeetYourTeachers } from '@/components/sections'
import { revalidate } from '@/config/index'
import { useContext, useEffect } from 'react'

const TeachersPage = ({ programs, teachers }) => {
  const { setPrograms, setCurProgramsType, setCurProgramsStudyFieldSlug } =
    useContext(ProgramsContext)

  useEffect(() => {
    setPrograms(programs)
    setCurProgramsType(null)
    setCurProgramsStudyFieldSlug(null)
  }, [])

  return (
    <>
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
