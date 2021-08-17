import { PagesProgram } from '@/components/pages'
import { backRootUrl, programsUrl } from '@/config/index'
import { getListItemsInnerHtml, convertMdToHtml } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const CoursePage = ({ program }) => {
  const { setProgram } = useContext(ProgramContext)

  useEffect(() => {
    setProgram(program)
  }, [])

  return (
    <>
      <PagesProgram program={program} />
    </>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const courses = data.filter(
    program => program.type && program.type.toLowerCase() === 'course'
  )

  const program = courses.filter(courses => courses.slug === slug)[0]

  program.description = convertMdToHtml({ param: program.description })

  return {
    props: {
      program
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export async function getStaticPaths() {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const courses = data.filter(
    program => program.type && program.type.toLowerCase() === 'course'
  )

  const paths = courses.map(course => ({
    params: { slug: course.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default CoursePage
