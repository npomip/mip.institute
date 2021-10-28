import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'

type FormValues = {
  name: string
  phone: string
  question: string
  leadPage: string
}

const FormAlpha = ({
  cta = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors }
  } = useForm<FormValues>()

  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  const router = useRouter()

  const onSubmit = async data => {
    setIsDisabled(true)
    // handle loader
    // handle data
    // handle utms
    data.leadPage = router.asPath
    console.log(data)
    const req = await hitContactRoute(data)
    if (req === 200) {
      console.log('Success')
    } else {
      console.log('err')
    }
  }

  return (
    <form
      method='post'
      className={classNames({
        [stls.containet]: true,
        [stls.atFooter]: atFooter
      })}
      onSubmit={handleSubmit(data => onSubmit(data))}>
      <div className={stls.group}>
        <div className={classNames(stls.inpt, stls.name)}>
          <input
            type='text'
            aria-label='Ваше имя'
            placeholder='Ваше имя'
            disabled={isDisabled}
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
            disabled={isDisabled}
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
              disabled={isDisabled}
              {...register('question', {
                maxLength: {
                  value: 320,
                  message: `*Максимальная длинна вопроса 320 символов`
                }
              })}></textarea>
            <p className={stls.err}>
              {errors.question && errors.question.message}
            </p>
          </div>
        )}

        <div className={stls.btn}>
          {atFooter ? (
            <BtnBeta text={cta} isDisabled={isDisabled} />
          ) : (
            <BtnAlpha text={cta} isDisabled={isDisabled} />
          )}
        </div>

        {agreement && (
          <p className={stls.agreement}>
            Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
            персональных данных
          </p>
        )}
      </div>
    </form>
  )
}

export default FormAlpha
