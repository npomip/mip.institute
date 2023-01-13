import stls from '@/styles/components/icons/IconPhone.module.sass'
import classNames from 'classnames'

const IconPhone = ({ small = false }) => {
  return (
    <span
      className={classNames({ [stls.container]: true, [stls.small]: small })}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Телефон</title>
        <path
          d='M20.4835 3.51295C15.7965 -1.17263 8.19853 -1.1715 3.51295 3.51553C-1.17263 8.20256 -1.1715 15.8005 3.51553 20.4861C8.20256 25.1717 15.8005 25.1706 20.4861 20.4835C22.7364 18.2325 24.0002 15.1798 23.9995 11.997C23.9989 8.81461 22.7341 5.76286 20.4835 3.51295ZM18.1731 16.7154C18.1726 16.7159 18.1721 16.7165 18.1715 16.717V16.713L17.5635 17.317C16.7772 18.1133 15.632 18.4409 14.5435 18.181C13.4468 17.8875 12.4043 17.4202 11.4555 16.797C10.574 16.2336 9.75703 15.575 9.0195 14.833C8.34089 14.1593 7.73123 13.4197 7.19948 12.625C6.61786 11.7699 6.1575 10.8384 5.83148 9.85697C5.45775 8.70403 5.76745 7.43892 6.6315 6.58898L7.34348 5.877C7.54144 5.67816 7.86309 5.67745 8.06189 5.87541C8.0624 5.87592 8.06297 5.87644 8.06348 5.877L10.3115 8.12499C10.5103 8.32294 10.511 8.6446 10.3131 8.84339C10.3125 8.84391 10.312 8.84442 10.3115 8.84499L8.99147 10.165C8.61272 10.5396 8.56509 11.1349 8.87948 11.565C9.3569 12.2202 9.88523 12.8368 10.4595 13.409C11.0998 14.052 11.7958 14.637 12.5395 15.157C12.9692 15.4568 13.5517 15.4062 13.9235 15.037L15.1995 13.741C15.3974 13.5422 15.7191 13.5415 15.9179 13.7394C15.9184 13.74 15.9189 13.7405 15.9195 13.741L18.1715 15.997C18.3704 16.1949 18.3711 16.5166 18.1731 16.7154Z'
          fill='white'
        />
      </svg>
    </span>
  )
}

export default IconPhone
