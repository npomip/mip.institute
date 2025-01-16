import React, { useState } from 'react'
import { TextFreeAccess } from './TextFreeAccess/TextFreeAccess'
import TwoColumns from '@/ui/TwoColumns'
import FormFreeAccess from './FormFreeAccess/FormFreeAccess'
import styles from './ContentFreeAccess.module.sass'

export const ContentFreeAccess = () => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  return (
    <div className={styles.container}>
      <TwoColumns>
        <TextFreeAccess />
        <FormFreeAccess
          setDisabled={setDisabled}
          disabled={disabled}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      </TwoColumns>
      {disabled ? (
        <button form="formAccess" type='button' className={styles.submitBtn} onClick={() => setShowPopup(true)}>
          Посмотреть доступ
        </button>
      ) : (
        <button form="formAccess" type='submit' disabled={showPopup} className={styles.submitBtn}>
          Получить доступ
        </button>
      )}
    </div>
  )
}
