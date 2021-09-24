import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import onSubmit from '@/components/funcs/onSubmit'
import { BtnAlpha } from '@/components/btns'
import classNames from 'classnames'

type FormValues = {
  name: string
  phone: string
  question: string
}

const FormAlpha = ({
  cta = 'Подобрать программу',
  question = false,
  popup = false
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<FormValues>()

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  return (
    <form
      method='post'
      className={stls.container}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={stls.group}>
        <div className={classNames(stls.inpt, stls.name)}>
          <input
            type='text'
            aria-label='Ваше имя'
            placeholder='Ваше имя'
            {...register('name', {
              maxLength: {
                value: 32,
                message: `*Не больше 32 символов`
              }
            })}
          />
          <p className={stls.err}>{errors.name && errors.name.message}</p>
        </div>
        <div className={classNames(stls.inpt, stls.phone)}>
          <input
            type='tel'
            aria-label='Ваш номер телефона'
            placeholder='Ваш телефон'
            {...register('phone', {
              required: `*Номер телефона обязателен`,
              minLength: {
                value: 5,
                message: `*Минимум 5 цифр`
              }
            })}
          />
          <p className={stls.err}>{errors.phone && errors.phone.message}</p>
        </div>
        {question && (
          <div className={classNames(stls.inpt, stls.question)}>
            <textarea
              aria-label='Задайте Ваш вопрос'
              placeholder='Задайте Ваш вопрос'
              {...register('question', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 5,
                  message: `*Минимум 5 цифр`
                }
              })}></textarea>
            <p className={stls.err}>
              {errors.question && errors.question.message}
            </p>
          </div>
        )}

        <div className={stls.btn}>
          <BtnAlpha text={cta} />
        </div>
      </div>
    </form>
  )
}

export default FormAlpha
