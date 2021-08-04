import stls from '@/styles/components/forms/FormAlpha.module.sass'
import { useForm } from 'react-hook-form'
import onSubmit from '@/components/funcs/onSubmit'
import { BtnAlpha } from '@/components/btns'

type FormValues = {
  name: string
  phone: string
}

const FormAlpha = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>()

  return (
    <form
      method='post'
      className={stls.container}
      onSubmit={handleSubmit(onSubmit)}>
      <div className={stls.group}>
        <div className={stls.inpt}>
          <input
            type='text'
            aria-label='Ваше имя'
            placeholder='Введите имя'
            {...register('name', {
              maxLength: {
                value: 32,
                message: `*Не больше 32 символов`
              }
            })}
          />
          <p className={stls.err}>{errors.name && errors.name.message}</p>
        </div>
        <div className={stls.inpt}>
          <input
            type='tel'
            aria-label='Ваш номер телефона'
            placeholder='Телефон'
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
        <div className={stls.btn}>
          <BtnAlpha text={'Подобрать программу'} />
        </div>
      </div>
    </form>
  )
}

export default FormAlpha
