import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './FormFreeAccess.module.sass'
import axios from 'axios'
import PopupAccess from '../PopupAccess/PopupAccess'
import classNames from 'classnames'
import routes from '@/config/routes'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

type FormValues = {
  name: string
  phone: string
  email: string
  lastName: string
}
const FormFreeAccess = ({ setDisabled }) => {
  const [showPopup, setShowPopup] = useState(false)
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      lastName: '',
      phone: '',
      email: ''
    }
  })

  const router = useRouter()
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData')
    const storedLink = localStorage.getItem('accessLink')
    const storedPassword = localStorage.getItem('accessPassword')
    const storedLogin = localStorage.getItem('accessLogin')

    if (storedLink && storedPassword && storedLogin) {
      setShowPopup(true)
      setDisabled(true)
    }
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData)
      reset(parsedData)
    }
  }, [setShowPopup, setDisabled, reset])

  const onSubmit = async data => {
    try {
      const response = await axios.post('/api/FreeAccess/generatingAccessToWebinar', data)
      const { link, password, login } = response.data

      localStorage.setItem('formData', JSON.stringify(data))
      localStorage.setItem('accessLink', link)
      localStorage.setItem('accessPassword', password)
      localStorage.setItem('accessLogin', login)

      setShowPopup(true)
      setDisabled(true)
      // собираем данные для отправки в СРМ
      data.leadPage = router.asPath
      const utms = JSON.parse(sessionStorage.getItem('utms'))
      data.utms = utms
      sessionStorage.removeItem('utms')
      const referer = JSON.parse(sessionStorage.getItem('referer'))
      data.referer = referer
      sessionStorage.removeItem('referer')
      const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
      data.ymUid = ymUid
      const clickId = getCookie('utm')

      const roistat_visit = getCookie('roistat_visit')
      const advcake_track_id = getCookie('advcake_track_id')
      const advcake_track_url = getCookie('advcake_track_url')

      if (typeof clickId === 'string') {
        data.utm = JSON.parse(clickId)
      } else {
        data.utm = null
      }

      data.advcake_track_id = advcake_track_id
      data.advcake_track_url = advcake_track_url
      data.roistat_visit = roistat_visit

      data.link = link
      data.password = password
      data.login = login

      // отправляем данные
      const res = await axios.post(`${routes.front.root}/api/genezis`, data)
    } catch (error) {
      console.error('Error generating link:', error)
    }
  }

  return (
    <>
      {showPopup && <PopupAccess />}
      <form id='formAccess' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <Controller
            name='name'
            control={control}
            rules={{
              required: '*Имя обязательно',
              minLength: {
                value: 3,
                message: '*Имя должно содержать минимум 3 символа'
              }
            }}
            render={({ field }) => (
              <input
                disabled={showPopup}
                {...field}
                placeholder='Введите имя'
                className={styles.input}
              />
            )}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name='lastName'
            control={control}
            rules={{
              required: '*Фамилия обязательно',
              minLength: {
                value: 3,
                message: '*Фамилия должна содержать минимум 3 символа'
              }
            }}
            render={({ field }) => (
              <input
                disabled={showPopup}
                {...field}
                placeholder='Введите фамилию'
                className={styles.input}
              />
            )}
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name='phone'
            control={control}
            rules={{
              required: '*Номера телефона обязательно'
            }}
            render={({ field }) => (
              <input
                {...field}
                disabled={showPopup}
                placeholder='Номер телефона'
                className={styles.input}
              />
            )}
          />
          {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
        </div>

        <div className={styles.formGroup}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: '*Email обязательно',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: '*Неверный формат Email'
              }
            }}
            render={({ field }) => (
              <input
                {...field}
                disabled={showPopup}
                placeholder='Email'
                type='email'
                className={styles.input}
              />
            )}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <button
          type='submit'
          disabled={showPopup}
          className={classNames(styles.submitBtn, styles.onMobile)}>
          Получить доступ
        </button>
      </form>
    </>
  )
}

export default FormFreeAccess
