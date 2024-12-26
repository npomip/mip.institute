import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import styles from './FormFreeAccess.module.sass'
import axios from 'axios'
import PopupAccess from '../PopupAccess/PopupAccess'
import { prepareCrmData } from '../helpers/prepareCrmData'
import routes from '@/config/routes'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'

type FormValues = {
  name: string
  phone: string
  email: string
  lastName: string
}

type DataStorage = {
  login: string
  password: string
  link: string
} | null

interface FormFreeAccessProps {
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>
  disabled: boolean
  showPopup: boolean
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}
const FormFreeAccess: React.FC<FormFreeAccessProps> = ({ setDisabled, disabled, showPopup, setShowPopup }) => {
  const [dataStorage, setDataStorage] = useState<DataStorage>(null)
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
      setDataStorage({
        login: storedLogin,
        password: storedPassword,
        link: storedLink
      })
    }
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData)
      reset(parsedData)
    }
  }, [setShowPopup, setDisabled, reset])

 const onSubmit = async (formData: FormValues) => {
  try {
    const response = await axios.post('/api/FreeAccess/generatingAccessToWebinar', formData)
    const { link, password, login } = response.data

    localStorage.setItem('formData', JSON.stringify(formData))
    localStorage.setItem('accessLink', link)
    localStorage.setItem('accessPassword', password)
    localStorage.setItem('accessLogin', login)

    setDataStorage({ login, password, link })
    setShowPopup(true)
    setDisabled(true)

    // Собираем данные для CRM
    const crmData = prepareCrmData(
      formData, 
      { link, password, login }, 
      router.asPath
    )

    // Отправляем данные в CRM
    const res = await axios.post(`${routes.front.root}/api/genezis`, crmData)

  } catch (error) {
    console.error('Error generating link:', error)
  }
}

  return (
    <>
      {showPopup && (
        <PopupAccess
          showPopup={showPopup}
          dataStorage={dataStorage}
          onClose={() => setShowPopup(false)}
        />
      )}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
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
                disabled={disabled}
                placeholder='Email'
                type='email'
                className={styles.input}
              />
            )}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>
      </form>
    </>
  )
}

export default FormFreeAccess
