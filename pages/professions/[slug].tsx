import { PagesProgram } from '@/components/pages'
import { backRootUrl, programsUrl } from '@/config/index'
import { getListItemsInnerHtml, convertMdToHtml } from '@/helpers/index'
import ProgramContext from '@/context/program/programContext'
import { useContext, useEffect } from 'react'

const ProfessionPage = ({ program }) => {
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

  const professions = data.filter(
    program => program.type && program.type.toLowerCase() === 'profession'
  )

  const program = professions.filter(
    professions => professions.slug === slug
  )[0]

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

  const professions = data.filter(
    program => program.type && program.type.toLowerCase() === 'profession'
  )

  const paths = professions.map(profession => ({
    params: { slug: profession.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export default ProfessionPage
