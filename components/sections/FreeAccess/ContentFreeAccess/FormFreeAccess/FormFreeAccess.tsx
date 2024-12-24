// FormFreeAcces.js
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './FormFreeAccess.module.sass'
import { BtnFreeAccess } from '../BtnFreeAccess/BtnFreeAccess'

export const FormFreeAccess = () => {
  const { control, handleSubmit } = useForm()

  // Функция для отправки данных формы
  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder='Введите имя'
              className={styles.input}
            />
          )}
        />
      </div>

      <div className={styles.formGroup}>
        <Controller
          name='lastName'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder='Введите фамилию'
              className={styles.input}
            />
          )}
        />
      </div>

      <div className={styles.formGroup}>
        <Controller
          name='phone'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder='Номер телефона'
              className={styles.input}
            />
          )}
        />
      </div>

      <div className={styles.formGroup}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder='Email'
              type='email'
              className={styles.input}
            />
          )}
        />
      </div>
      <button type='submit'  className={styles.submitBtn}>
        Получить доступ
      </button>
    </form>
  )
}
