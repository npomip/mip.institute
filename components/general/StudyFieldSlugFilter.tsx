import stls from '@/styles/components/general/StudyFieldSlugFilter.module.sass'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useState } from 'react'
import StudyFields from './StudyFields'

interface PropsFilter {
  studyField: string
  studyFieldSlug: string
}

const StudyFieldSlugFilter = ({
  props,
  slug
}: {
  props: PropsFilter[]
  slug: string
}) => {
  const router = useRouter()
  // console.log(slug)

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
  // console.log(uniqueCategories)

  const [studyFieldSlug, setStudyFieldSlug] = useState({
    studyFieldSlug: router.query.studyFieldSlug || '',
    studyField: router.query.studyField || 'Все'
  })

  const handleFilter = el => {
    const selectedSlug = el
    setStudyFieldSlug(selectedSlug)
    router.push(`/${slug}/${selectedSlug.studyFieldSlug}`)
  }
  // console.log(studyFieldSlug)
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
