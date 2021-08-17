import { PagesPrograms } from '@/components/pages'
import { backRootUrl, programsUrl } from '@/config/index'
import { getListItemsInnerHtml, convertMdToHtml } from '@/helpers/index'
import parse from 'html-react-parser'

const ProgramsPage = ({ programs }) => {
  return (
    <>
      <PagesPrograms programs={programs} />
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`${backRootUrl}${programsUrl}`)
  const data = await res.json()

  const programs = convertMdToHtml({ arr: data, param: 'description' })

  return {
    props: {
      programs
    }
    // revalidate: 60 * 60 * 24 // a single day
  }
}

export default ProgramsPage
