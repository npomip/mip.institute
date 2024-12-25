import React, { useState } from 'react'
import { TextFreeAccess } from './TextFreeAccess/TextFreeAccess'
import TwoColumns from '@/ui/TwoColumns'
import FormFreeAccess from './FormFreeAccess/FormFreeAccess'
import styles from './ContentFreeAccess.module.sass'
import classNames from 'classnames'

export const ContentFreeAccess = () => {
  const [disabled, setDisabled] = useState(false)
  return (
    <div className={styles.container}>
      <TwoColumns>
        <TextFreeAccess />
        <FormFreeAccess setDisabled={setDisabled}/>
      </TwoColumns>
      <button form="formAccess" type="submit" disabled={disabled} className={classNames(styles.submitBtn, styles.onDesktop)}>
          Получить доступ
      </button>
    </div>
  )
}
