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
  } = useContext(ContextStaticProps)

  console.log(studyFieldsCourses)
  console.log(studyFieldsProfessions)

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
                      ? routes.front.courses
                      : curProgramsType === 'profession'
                      ? routes.front.professions
                      : routes.front.programs
                    : routes.front.programs
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
                    ? routes.front.courses
                    : curProgramsType === 'profession'
                    ? routes.front.professions
                    : routes.front.programs
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
