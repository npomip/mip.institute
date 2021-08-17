import { PagesPrograms } from '@/components/pages'
import { backRootUrl, programsUrl } from '@/config/index'
import { getListItemsInnerHtml, convertMdToHtml } from '@/helpers/index'
import parse from 'html-react-parser'

const ProfessionsPage = ({ programs }) => {
  return (
    <>
      <PagesPrograms programs={programs} />
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const professions = data.filter(
    program => program.type && program.type.toLowerCase() === 'profession'
  )

  const programs = convertMdToHtml({ arr: professions, param: 'description' })

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default ProfessionsPage
