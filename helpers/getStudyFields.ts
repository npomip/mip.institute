import { getStudyFieldsLabels, getStudyFieldsSlugs } from '@/helpers/index'

type getStudyFieldsType = {
  [key: string]: any
  studyField: string
  studyFieldSlug: string
}[]

const getStudyFields = (programs: any[]) => {
  const labels = getStudyFieldsLabels(programs)
  const slugs = getStudyFieldsSlugs(programs)

  console.log(labels)
  console.log(slugs)

  const output = labels
    .map((item, idx) => slugs[idx] && { label: item, slug: slugs[idx] })
    .filter(item => item)
  // console.log(output)

  return output
}

export default getStudyFields
