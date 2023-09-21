import stls from '@/styles/components/forms/NewForm.module.sass'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Popup from 'reactjs-popup'
import { useForm } from 'react-hook-form'
import hitContactRoute from '@/components/funcs/hitContactRoute'
import { BtnAlpha, BtnBeta } from '@/components/btns'
import classNames from 'classnames'
import { PopupThankyou } from '@/components/popups'
import sendToCalltouch from '../funcs/sendToCalltouchFunc'
import { getCookie } from 'cookies-next'
import ReCAPTCHA from "react-google-recaptcha";
import verifyCaptcha from '../funcs/verifyCaptcha'


type FormValues = {
  name: string
  phone: string
  email: string
  promocode: string
  question: string
  leadPage: string
}

const NewForm = ({
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
  const [token, setToken] = useState(null)

  useEffect(() => {
    popup && setFocus('name')
  }, [setFocus, popup])

  console.log(dirtyFields)

  const router = useRouter()
  const [captchaIsDone, setCaptchaIsDone] = useState(false)
  const [captchaIsVisible, setCaptchaIsVisible] = useState(false)
  const recaptchaRef = useRef(null)

  const onChange = async (value) =>  {
    // const captchaToken = await recaptchaRef.current.executeAsync();
    // console.log(captchaToken)
    const req = await verifyCaptcha({token: value})
    // recaptchaRef.current.reset();
    setCaptchaIsDone(true)
  }
  console.log(captchaIsDone)

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
          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша электронная почта'
              placeholder='Введите email'
              disabled={isDisabled}
              {...register('email', {
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                  message:
                    'Пожалуйста, введите корректный адрес электронной почты'
                }
              })}
            />
            <p className={stls.err}>{errors.email && errors.email.message}</p>
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
            {/* {atFooter ? (
              <BtnBeta text={cta} isDisabled={isDisabled} />
            ) : (
              <BtnAlpha text={cta} isDisabled={isDisabled} />
            )} */}
            <button disabled={!captchaIsDone} className={stls.violetButton}>Подобрать программу</button>
          </div>
          
          {agreement && (
            <p className={stls.agreement}>
              Нажимая кнопки на сайте Вы даете свое согласие на обработку Ваших
              персональных данных
            </p>
          )}
          
        </div>
        <br />
          {dirtyFields.phone && <ReCAPTCHA
          // ref={recaptchaRef}
            sitekey={key}
            onChange={onChange}
            
    />}
      </form>
    </>
  )
}

export default NewForm
