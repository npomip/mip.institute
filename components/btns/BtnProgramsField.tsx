import stls from '@/styles/components/btns/BtnProgramsField.module.sass'
import { useContext, useState } from 'react'
import classNames from 'classnames'
import { ContextStaticProps } from '@/context/index'
import PopupFields from '@/components/popups/PopupFields'
import loadIcon from '@/helpers/general/loadIcon'

const BtnProgramsField = ({ ofType = null }) => {
  const { studyFields, curProgramsStudyFieldSlug } =
    useContext(ContextStaticProps)

  const [isOpen, setIsOpen] = useState(false)

  const handleFieldsPopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={stls.container}>
      <button className={stls.btn} onClick={handleFieldsPopup}>
        <span>
          {!curProgramsStudyFieldSlug
            ? 'Все направления'
            : studyFields.map(studyField =>
                studyField.slug === curProgramsStudyFieldSlug
                  ? studyField.label
                  : ''
              )}
        </span>
        {loadIcon('IconMoreThan', { cnu: true })}
      </button>
      <div
        className={classNames({
          [stls.popup]: true,
          [stls.isOpen]: isOpen
        })}>
        <PopupFields close={handleFieldsPopup} />
      </div>
    </div>
  )
}

export default BtnProgramsField
