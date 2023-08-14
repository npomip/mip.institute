import stls from '@/styles/components/general/MainStudyFields.module.sass'
import { Fragment } from 'react'
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
}

const MainStudyFields = ({
  aside = false,
  ofType = null,
  close = null,
  flexend = false,
  smallText
}: StudyFieldsType) => {
  const list = [{id:1, label: 'Дополнительное образование', href: routes.front.programs}, {id:1, label: 'Профессиональная переподготовка', href: routes.front.professions}, {id:1, label: 'Повышение квалификации', href: routes.front.courses}]

  return (
    <ul
      className={stls.wrapper}>
      {list.map(({ label, href }, idx) => (
        <Fragment key={idx}>
          <li className={stls.studyField} onClick={close && close}>
            <BtnField
              href={href} mainFields>
              {label}
            </BtnField>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default MainStudyFields
