import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'
import { PopupThankyou } from '@/components/popups'
import sendToCalltouch from '../funcs/sendToCalltouchFunc'
import { getCookie } from 'cookies-next'
import ReCAPTCHA from "react-google-recaptcha";


type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  question: string
  leadPage: string
}

const FormAlpha = ({
  cta = 'Подобрать программу',
  question = false,
  popup = false,
  atFooter = false,
  agreement = false,
  promo = false,
  inProfessions=false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, dirtyFields },
    getValues
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  })

  const [isDisabled, setIsDisabled] = useState(false)
  const [thanksIsOpen, setThanksIsOpen] = useState(false)

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  console.log(dirtyFields)

  const router = useRouter()
  const [captchaIsDone, setCaptchaIsDone] = useState(false)
  const [captchaIsVisible, setCaptchaIsVisible] = useState(false)

  const onChange = () =>  {
    setCaptchaIsDone(true)
  }

  // const [phoneNum, setPhoneNum] = useState('')
  // const values = getValues()
  
//  const changeHandler = () => {
//     // В этой функции вы можете проверить, что поле телефонного номера заполнено и активировать капчу
    
//     setPhoneNum(values.phone) // Получите значение поля телефонного номера из формы
//     console.log(phoneNum)
//     if (phoneNum && phoneNum.trim() !== '') {
//       setCaptchaIsVisible(true); // Показать капчу, если номер введен
//     } else {
//       setCaptchaIsVisible(false); // Скрыть капчу, если номер не введен
//     }
//   };
  

  const onSubmit = async data => {
    setIsDisabled(true)
    setThanksIsOpen(true)
    // handle loader
    data.leadPage = router.asPath
    const utms = JSON.parse(sessionStorage.getItem('utms'))
    data.utms = utms
    sessionStorage.removeItem('utms')
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    data.referer = referer
    sessionStorage.removeItem('referer')
    const ymUid = JSON.parse(localStorage.getItem('_ym_uid'))
    data.ymUid = ymUid
    const clickId = getCookie('utm'); 
    console.log('clickId', clickId)
    // const clickId = parse(document.cookie).utm || null;
    if (typeof clickId === 'string') {
      data.utm = JSON.parse(clickId);
    } else {
      data.utm = null; // или какое-то другое значение по умолчанию
    }
    // document.cookie = "utm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(data)
    const req = await hitContactRoute(data)
    if (req === 200) {
      console.log('Success')
    } else {
      console.log('err')
    }
    const calltouch = await sendToCalltouch(data)
  }

  const key = process.env.REACT_APP_RECAPTCHA_SITE_KEY

  return (
    <>
      <Popup
        open={thanksIsOpen}
        closeOnDocumentClick
        onClose={() => setThanksIsOpen(false)}>
        <PopupThankyou close={() => setThanksIsOpen(false)} />
      </Popup>
      <form
        method='post'
        className={classNames({
          [stls.containet]: true,
          [stls.atFooter]: atFooter,
          [stls.inProfessions]: inProfessions
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
                required: `*Введите ваше имя`,
                minLength: {
                  value: 2,
                  message: `*Введите ваше имя`
                },
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
              type='number'
              aria-label='Ваш номер телефона'
              placeholder='Ваш телефон'
              disabled={isDisabled}
              {...register('phone', {
                required: `*Номер телефона обязателен`,
                minLength: {
                  value: 7,
                  message: `*Минимум 7 цифр`
                },
                maxLength: {
                  value: 18,
                  message: `*Не больше 18 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.phone && errors.phone.message}</p>
          </div>
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Ваша электронная почта'
              disabled={isDisabled}
              {...register('email', {
                pattern: {
                  value:
                    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message:
                    'Пожалуйста, введите корректный адрес электронной почты в формате example@mail.ru'
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          {promo && (
            <div className={classNames(stls.inpt, stls.promocode)}>
            <input
              type='text'
              aria-label='Промокод'
              placeholder='Промокод'
              disabled={isDisabled}
              {...register('promocode', {
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
          </div>
          )}
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
              <BtnAlpha text={cta} isDisabled={!captchaIsDone} />
            )}
          </div>
          {dirtyFields.phone && <ReCAPTCHA
            sitekey={key}
            onChange={onChange}
    />}

          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
              персональных данных
            </p>
          )}
        </div>
      </form>
    </>
  )
}

export default FormAlpha
