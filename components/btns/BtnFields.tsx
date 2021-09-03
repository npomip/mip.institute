import stls from '@/styles/components/btns/BtnFields.module.sass'
import { IconMenu } from '@/components/icons'
import { useContext, useEffect } from 'react'
import classNames from 'classnames'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { closeFieldsTooltipOnOuterClick } from '@/helpers/index'
import StudyFields from '@/components/general/StudyFields'

const BtnFields = () => {
  const { fieldsTooltipIsOpen, toggleFieldsTooltip, closeFieldsTooltip } =
    useContext(FieldsTooltipContext)

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
      <div
        className={classNames({
          [stls.tooltip]: true,
          [stls.isShown]: fieldsTooltipIsOpen
        })}>
        <StudyFields />
      </div>
    </div>
  )
}

export default BtnFields
