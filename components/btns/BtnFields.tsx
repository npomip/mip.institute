import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { BtnField } from '@/components/btns'
import { useState } from 'react'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)
  const { studyFields } = useContext(ProgramsContext)
  return (
    <div className={stls.container}>
      <button className={stls.btn} onClick={toggleFieldsTooltip}>
        <div className={stls.icon}>
          <IconMenu />
        </div>
        <span className={stls.text}>Направления обучения</span>
      </button>
      <ul
        className={classNames({
          [stls.tooltip]: true,
          [stls.isShown]: fieldsTooltipIsOpen
        })}>
        {studyFields.map((studyField, idx) => (
          <li key={studyField + idx} className={stls.studyField}>
            <BtnField>{studyField}</BtnField>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BtnFields
