import routes from '@/config/routes'
import payment from '@/helpers/funcs/payment'
import stls from '@/styles/components/forms/EventPaymentForm.module.sass'
import classNames from 'classnames'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import 'react-phone-input-2/lib/style.css'
import { IconTelegram, IconWhatsapp } from '../icons'
import IconCopyLink from '../icons/IconCopyLink'
import IconVk from '../icons/IconVk'
import { useEffect, useState } from 'react'
import IconCheck from '../icons/IconCheck'

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

type Props = {
  timepadHref: string
}

const EventPaymentForm = ({timepadHref}: Props) => {
  const urlId = '3079794'
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields }
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: ''
    }
  })
  // const [isLoading, setIsLoading] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}${router.asPath}`)
    }
  }, [router.asPath])

  const shareText = 'Рекомендую ознакомиться с этим мероприятием!'
  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }
  const socialLinks = [
    {
      id: 'vk',
      icon: <IconVk />,
      link: routes.share.vk(currentUrl, shareText)
    },
    {
      id: 'whatsapp',
      icon: <IconWhatsapp />,
      link: routes.share.whatsapp(currentUrl, shareText)
    },
    {
      id: 'telegram',
      icon: <IconTelegram />,
      link: routes.share.telegram(currentUrl, shareText)
    },
    {
      id: 'copyLink',
      icon: <IconCopyLink />,
      link: '#',
      onClick: e => {
        e.preventDefault()
        handleCopyLink()
      }
    }
  ]

  const onSubmit = async data => {
    data.leadPage = router.asPath
    const referer = JSON.parse(sessionStorage.getItem('referer'))
    data.referer = referer
    // data.price = program.price
    // data.lmsId = program.lmsId
    const utm = getCookie('utm')
    if (typeof utm === 'string') {
      data.utm = JSON.parse(utm)
    } else {
      data.utm = null
    }
    const resp = await payment(data)
    if (resp && resp.url) {
      window.open(resp.url, '_blank')
    } else {
      console.error('No URL found in response')
    }

    window.open(timepadHref, '_blank')
  }

  const isDisabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.surname

  const handleClick = (e, onClick) => {
    e.preventDefault()
    onClick(e)
  }

  const getClassName = (isCopied, id) =>
    classNames(stls.link, {
      [stls.green]: id === 'copyLink' && isCopied
    })

  return (
    <div className={stls.container}>
      <form
        method='post'
        className={stls.form}
        onSubmit={handleSubmit(data => onSubmit(data))}>
        <div className={stls.group}>
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваше имя'
              placeholder='Ваше имя'
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
          <div className={classNames(stls.inpt, stls.name)}>
            <input
              type='text'
              aria-label='Ваша фамилия'
              placeholder='Ваша фамилия'
              {...register('surname', {
                required: `*Введите вашу фамилию`,
                minLength: {
                  value: 2,
                  message: `*Введите вашу фамилию`
                },
                maxLength: {
                  value: 32,
                  message: `*Не больше 32 символов`
                }
              })}
            />
            <p className={stls.err}>
              {errors.surname && errors.surname.message}
            </p>
          </div>

          <div className={classNames(stls.inpt, stls.email)}>
            <input
              type='email'
              aria-label='Ваша почта'
              placeholder='Ваша почта'
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
          <div className={classNames(stls.inpt, stls.phone)}>
            <Controller
              name='phone'
              control={control}
              rules={{
                minLength: {
                  value: 8,
                  message: `*Минимум 8 цифр`
                },
                required: `*Номер телефона обязателен`
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  onChange={onChange}
                  country='ru'
                  localization={ru}
                  placeholder='Ваш телефон'
                  containerClass={stls.containerInput}
                  inputClass={stls.phoneInput}
                  buttonClass={stls.flagButton}
                  dropdownClass={stls.dropdown}
                  containerStyle={{
                    marginBottom: `${errors.phone ? '5px' : '20px'}`
                  }}
                />
              )}
            />
            {errors.phone && (
              <p className={stls.err}>{errors.phone && errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className={stls.terms}>
          Оставляя заявку, вы соглашаетесь с условиями политики
          конфиденциальности
        </div>
        <button className={stls.btn} disabled={isDisabled}>
          Оплатить
        </button>
        <div className={stls.footer}>
          <p className={stls.share}>Поделиться мероприятием:</p>
          <div className={stls.socials}>
            {socialLinks.map(social => (
              <a
                key={social.id}
                className={getClassName(isCopied, social.id)}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.id}
                onClick={
                  social.onClick
                    ? e => handleClick(e, social.onClick)
                    : undefined
                }>
                {social.id === 'copyLink' && isCopied ? (
                  <IconCheck />
                ) : (
                  social.icon
                )}
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventPaymentForm
