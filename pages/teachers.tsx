import { GetStaticProps, NextPage } from 'next'
import { TypePageTeachersProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeTeachers } from '@/data/routes'
import companyName from '@/data/companyName'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import ProgramsContext from '@/context/programs/programsContext'
import { MeetYourTeachers } from '@/components/sections'

const TeachersPage: NextPage<TypePageTeachersProps> = ({
  programs,
  teachers
}) => {
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
        title={`Преподаватели | ${companyName}`}
        description={truncate(
          `${teachers[0].name}, ${teachers[0].achievements} | ${teachers[1].name}, ${teachers[1].achievements}`,
          120
        )}
        canonical={`${routesFront.root}${routeTeachers}`}
      />
      <MeetYourTeachers teachers={teachers} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.teachers })

export default TeachersPage
