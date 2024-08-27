import { BtnField } from '@/components/btns'
import { routes } from '@/config/index'
import stls from '@/styles/components/general/StudyFields.module.sass'
import cn from 'classnames'
import {
  studyFields,
  studyFieldsCourses,
  studyFieldsProfessions
} from 'constants/studyFieldsOnMain'
import { Fragment } from 'react'

type StudyFieldsType = {
  aside?: boolean
  ofType?: 'course' | 'profession' | null
  close?: any
  flexend?: boolean
  smallText?: boolean
  onMain?: boolean
  orang?: boolean
  currentType?: string
}

const StudyFieldsOnMain = ({
  aside = false,
  ofType = null,
  close = null,
  flexend = false,
  orang = false,
  smallText,
  onMain,
  currentType
}: StudyFieldsType) => {
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
        [stls.flexend]: flexend
      })}>
      {list.map(({ label, value }, idx) => (
        <Fragment key={value + idx}>
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              smallText={smallText}
              orang={orang}
              href={`${
                currentType === 'course'
                  ? routes.front.courses
                  : currentType === 'profession'
                  ? routes.front.professions
                  : routes.front.programs
              }/${value}`}
              aside={aside}
              slug={value}>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default StudyFieldsOnMain
