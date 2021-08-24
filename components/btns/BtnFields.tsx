import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { BtnField } from '@/components/btns'
import ProgramsContext from '@/context/programs/programsContext'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { routePrograms } from '@/data/routes'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)
  const { studyFields } = useContext(ProgramsContext)

  useEffect(() => {
    closeFieldsTooltipOnOuterClick(closeFieldsTooltip)
  }, [])
  return (
    <div id='btnFieldsContainer' className={stls.container}>
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
        {studyFields.map(({ label, slug }, idx) => (
          <li key={slug + idx} className={stls.studyField}>
            <BtnField href={`${routePrograms}/${slug}`}>{label}</BtnField>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BtnFields
