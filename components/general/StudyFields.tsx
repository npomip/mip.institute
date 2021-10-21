import stls from '@/styles/components/general/StudyFields.module.sass'
import { Fragment, useContext } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { BtnField } from '@/components/btns'
import { routePrograms, routeCourses, routeProfessions } from '@/data/routes'
import classNames from 'classnames'

type StudyFieldsType = {
  aside?: boolean
  ofType?: 'course' | 'profession' | null
  close?: any
}

const StudyFields = ({
  aside = false,
  ofType = null,
  close = null
}: StudyFieldsType) => {
  const {
    studyFields,
    studyFieldsCourses,
    studyFieldsProfessions,
    curProgramsType
  } = useContext(ProgramsContext)

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : studyFields

  return (
    <ul
      className={classNames({
        [stls.container]: true,
        [stls.aside]: aside,
        [stls.tooltip]: !aside
      })}>
      {list.map(({ label, slug }, idx) => (
        <Fragment key={slug + idx}>
          {idx === 0 && (
            <li className={stls.studyField} onClick={close && close}>
              <BtnField
                href={
                  aside
                    ? curProgramsType === 'course'
                      ? routeCourses
                      : curProgramsType === 'profession'
                      ? routeProfessions
                      : routePrograms
                    : routePrograms
                }
                aside={aside}>
                Все направления
              </BtnField>
            </li>
          )}
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              href={`${
                aside
                  ? curProgramsType === 'course'
                    ? routeCourses
                    : curProgramsType === 'profession'
                    ? routeProfessions
                    : routePrograms
                  : routePrograms
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
