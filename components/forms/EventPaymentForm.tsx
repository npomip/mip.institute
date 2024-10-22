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

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

type Props = {
  // program: {
  //   price
  //   lmsId
  // }
}

const socialLinks = [
  { id: 'vk', icon: <IconVk />, link: routes.external.vk },
  { id: 'whatsapp', icon: <IconWhatsapp />, link: routes.external.whatsapp },
  { id: 'telegram', icon: <IconTelegram />, link: routes.external.telegram },
  { id: 'copylink', icon: <IconCopyLink />, link: '#' }
]

const EventPaymentForm = ({}: Props) => {
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
  }

  const isDisabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.surname

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
                className={stls.link}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.id}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventPaymentForm
