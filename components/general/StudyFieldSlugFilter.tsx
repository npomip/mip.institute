import stls from '@/styles/components/general/StudyFieldSlugFilter.module.sass'
import classNames from 'classnames'
import { Dispatch, SetStateAction } from 'react'

interface PropsFilter {
  studyField: string
  studyFieldSlug: string
}

const StudyFieldSlugFilter = ({
  props,
  slug,
  setStudyFieldSlug,
  studyFieldSlug
}: {
  props: PropsFilter[]
  slug: string
  studyFieldSlug: {
    studyField: string | string[]
    studyFieldSlug: string | string[]
  }
  setStudyFieldSlug: Dispatch<
    SetStateAction<{
      studyFieldSlug: string | string[]
      studyField: string | string[]
    }>
  >
}) => {
  let uniqueCategories = [
    ...new Set(props?.map(seminar => seminar.studyFieldSlug))
  ]
  const uniqueCategoriesWithField = uniqueCategories.map(slug => ({
    studyFieldSlug: slug,
    studyField:
      props.find(seminar => seminar.studyFieldSlug === slug)?.studyField || ''
  }))

  const firstEl = [{ studyFieldSlug: '', studyField: 'Все cтатьи' }]

  let cat = firstEl.concat(uniqueCategoriesWithField)

  const handleFilter = el => {
    const selectedSlug = el
    setStudyFieldSlug(selectedSlug)
  }

  return (
    <div>
      <div className={stls.container}>
        {cat?.map(el => (
          <p
            onClick={() => handleFilter(el)}
            className={classNames({
              [stls.category]: true,
              [stls.active]: el.studyFieldSlug === studyFieldSlug.studyFieldSlug
            })}
            key={el.studyField}>
            {el.studyField}
          </p>
        ))}
      </div>
    </div>
  )
}

export default StudyFieldSlugFilter
