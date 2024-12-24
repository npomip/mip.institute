import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import styles from './FormFreeAccess.module.sass'

const FormFreeAccess = () => {
  const { control, handleSubmit } = useForm()
  const [generatedLink, setGeneratedLink] = useState(null)

  const handleGenerateLink = link => {
    setGeneratedLink(link) // Получаем сгенерированную ссылку и отображаем
  }

  // Функция для отправки данных формы
  const onSubmit = async data => {
    try {
      // Отправляем данные на сервер для генерации ссылки с логином и паролем
      const response = await axios.post(
        '/api/FreeAccess/generatingAccessToWebinar',
        data
      ) // тут добавить добавление данных в локал сторедже
      const { link } = response.data
      handleGenerateLink(link)
    } catch (error) {
      console.error('Error generating link:', error)
    }
  }

  return (
    <>
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

        <button type='submit' className={styles.submitBtn}>
          Получить доступ
        </button>
      </form>
      {generatedLink && (
        <div className={styles.formLink}>
          <p>Ваша ссылка для входа:</p>
          <a href={generatedLink} target='_blank' rel='noopener noreferrer'>
            Перейти по ссылке
          </a>
        </div>
      )}
    </>
  )
}

export default FormFreeAccess
