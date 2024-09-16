import stls from '@/styles/components/practicalTraining/PracticalPaymentForm.module.sass'
import formList from 'constants/practicalPaymentForm'
import Wrapper from '../layout/Wrapper'
import TwoColumnsPractical from '../layout/TwoColumnsPractical'
import routes from '@/config/routes'
import genezis from '../funcs/genezis'
import { getCookie } from 'cookies-next'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import ru from 'react-phone-input-2/lang/ru.json'
import Button from '../btns/Button'
import Popup from 'reactjs-popup'
import { PopupLoading } from '../popups'
import Image from 'next/image'
import gift from 'public/assets/imgs/practicalCarousel/gift.png'
import { useRouter } from 'next/router'

type Props = {
  price: number
}

type FormValues = {
  name: string
  surname: string
  phone: string
  email: string
}

const PracticalPaymentForm = ({ price }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields }
  } = useForm<FormValues>({
    defaultValues: { name: '', surname: '', email: '', phone: '' }
  })

  const [isAgree, setIsAgree] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isIpCheckFailed, setIsIpCheckFailed] = useState(false)
  const router = useRouter()

  const onSubmit = async data => {
    setIsDisabled(true)
    setIsLoading(true)
    // Сбор данных для отправки
    const clickId = getCookie('utm')
    const utm = typeof clickId === 'string' ? JSON.parse(clickId) : null

    const extraData = {
      roistatAB: localStorage.getItem('AB'),
      leadPage: router.asPath,
      utms: JSON.parse(sessionStorage.getItem('utms')),
      referer: JSON.parse(sessionStorage.getItem('referer')),
      ymUid: JSON.parse(localStorage.getItem('_ym_uid')),
      price,
      roistat_visit: getCookie('roistat_visit'),
      advcake_track_id: getCookie('advcake_track_id'),
      advcake_track_url: getCookie('advcake_track_url'),
      blockForAmo: 'Поступить',
      utm
    }

    const response = await genezis({ ...data, ...extraData })
    setIsLoading(false)

    if (response === 200) {
      window.open(
        `${routes.front.gratefull}?email=${data.email}&name=${data.name}`,
        '_blank'
      )
      setIsIpCheckFailed(false)
    } else {
      setIsIpCheckFailed(true)
    }
  }

  const isFormDisabled =
    !dirtyFields.email ||
    !dirtyFields.name ||
    !dirtyFields.phone ||
    !dirtyFields.surname ||
    !isAgree ||
    isDisabled

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.colouredTitle}>Оплата </span> обучения
        </h2>
        <TwoColumnsPractical bigLeft rightViolet>
          <div className={stls.leftBlock}>
            <p className={stls.leftBlockTitle}>
              Можете выбрать наиболее подходящий для вас вариант:
            </p>
            <div className={stls.leftContent}>
              <div className={stls.radioGroup}>
                {formList.map(({ label, value }, idx) => (
                  <div key={value} className={stls.radioItem}>
                    <input
                      type='radio'
                      id={`radio-${idx}`}
                      className={stls.radio}
                      name='payment'
                      value={value}
                    />
                    <label htmlFor={`radio-${idx}`} className={stls.radioLabel}>
                      {label}
                    </label>
                  </div>
                ))}
                <p className={stls.remark}>
                  *При одновременном поступлении на программу проф.
                  переподготовки
                </p>
              </div>
              <div className={stls.violetLine}></div>
              <div className={stls.giftBlock}>
                <p className={stls.giftTitle}>ИТОГО:</p>
                <p className={stls.giftSubtitle}>
                  (стоимость программы практики)
                </p>
                <p className={stls.oldPrice}>{price + 5000} ₽</p>
                <p className={stls.newPrice}>{price} ₽</p>
                <div className={stls.giftImage}>
                  <Image src={gift} width={170} height={170} alt='Подарок' />
                </div>
                <p className={stls.giftText}>
                  При оплате до 14 сентября курс <br /> “Жизнь, свободная от
                  обид” <br />
                  <span className={stls.giftTextBold}>в подарок</span>
                </p>
              </div>
            </div>
          </div>

          <div className={stls.formContainer}>
            <p className={stls.formTitle}>
              Заполни заявку, чтобы узнать детали и купить на лучших условиях
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className={stls.form}>
              <div className={stls.group}>
                <InputField
                  label='Ваше имя'
                  type='text'
                  name='name'
                  register={register}
                  errors={errors}
                  disabled={isDisabled}
                />
                <InputField
                  label='Ваша фамилия'
                  type='text'
                  name='surname'
                  register={register}
                  errors={errors}
                  disabled={isDisabled}
                />
                <PhoneInputField
                  control={control}
                  errors={errors}
                  disabled={isDisabled}
                />
                <InputField
                  label='Ваша электронная почта'
                  type='email'
                  name='email'
                  register={register}
                  errors={errors}
                  disabled={isDisabled}
                />
              </div>

              <div className={stls.footer}>
                <label className={stls.checkboxBlock}>
                  <input
                    type='checkbox'
                    checked={isAgree}
                    onChange={() => setIsAgree(!isAgree)}
                    disabled={isDisabled}
                  />
                  Согласен(-а) с условиями
                  <a
                    href={routes.front.policiesOferta}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={stls.link}>
                    {' '}
                    договора оферты
                  </a>
                </label>
              </div>

              {isIpCheckFailed && (
                <p className={stls.checkError}>
                  Невозможно отправить форму. <br />
                  Пожалуйста, свяжитесь с нами по номеру{' '}
                  <a href='tel:+7-499-110-86-32'>+7 (499) 110-86-32</a> или{' '}
                  <a
                    href='https://api.whatsapp.com/send/?phone=%2B74991108632&amp;text&amp;type=phone_number&amp;app_absent=0'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Напишите в WhatsApp
                  </a>
                </p>
              )}

              <div className={stls.buttons}>
                <Button
                  text='Записаться'
                  isDisabled={isFormDisabled}
                  onClick={() => {}}
                />
              </div>
            </form>

            {isLoading && (
              <Popup open={isLoading} onClose={() => setIsLoading(false)}>
                <PopupLoading />
              </Popup>
            )}
          </div>
        </TwoColumnsPractical>
      </Wrapper>
    </section>
  )
}

const InputField = ({ label, type, name, register, errors, disabled }) => (
  <div className={stls.inpt}>
    <input
      type={type}
      aria-label={label}
      placeholder={label}
      disabled={disabled}
      {...register(name, {
        required: `*Введите ${label.toLowerCase()}`,
        minLength: { value: 2, message: `*Введите минимум 2 символа` },
        maxLength: { value: 32, message: `*Не больше 32 символов` }
      })}
    />
    {errors[name] && <p className={stls.err}>{errors[name]?.message}</p>}
  </div>
)

const PhoneInputField = ({ control, errors, disabled }) => (
  <div className={stls.phone}>
    <Controller
      name='phone'
      control={control}
      rules={{
        required: '*Введите номер телефона',
        minLength: { value: 8, message: '*Минимум 8 цифр' }
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
          disabled={disabled}
        />
      )}
    />
    {errors.phone && <p className={stls.err}>{errors.phone?.message}</p>}
  </div>
)

export default PracticalPaymentForm
