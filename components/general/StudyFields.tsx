import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { routes } from '@/config/index'
import { ContextStaticProps } from '@/context/index'
import { BtnField } from '@/components/btns'

type StudyFieldsType = {
  aside?: boolean
  ofType?: 'course' | 'profession' | null
  close?: any
  flexend?: boolean
  smallText?: boolean
  onMain?: boolean
  isOrange?: boolean
  isInRow?: boolean
}

const StudyFields = ({
  aside = false,
  ofType = null,
  close = null,
  flexend = false,
  isOrange = true,
  smallText,
  isInRow = true
}: StudyFieldsType) => {
  const {
    studyFields,
    studyFieldsCourses,
    studyFieldsProfessions,
    curProgramsType
  } = useContext(ContextStaticProps)

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : studyFields

  return (
    <ul
      className={cn({
        [stls.container]: true,
        [stls.aside]: aside,
        [stls.tooltip]: !aside,
        [stls.flexend]: flexend,
        [stls.row]: isInRow
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              smallText={smallText}
              orang={true}
              href={`${
                curProgramsType === 'course'
                  ? routes.front.courses
                  : curProgramsType === 'profession'
                  ? routes.front.professions
                  : routes.front.programs
              }/${slug}`}
              aside={aside}
              slug={slug}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFields
