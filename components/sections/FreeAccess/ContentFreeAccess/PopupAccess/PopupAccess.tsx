import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import styles from './PopupAccess.module.sass'

const PopupAccess = () => {
  const [dataStorage, setDataStorage] = useState(null)
  const [tooltipText, setTooltipText] = useState('')

  useEffect(() => {
    const storedLink = localStorage.getItem('accessLink')
    const storedPassword = localStorage.getItem('accessPassword')
    const storedLogin = localStorage.getItem('accessLogin')

    if (storedLink && storedPassword && storedLogin) {
      setDataStorage({
        login: storedLogin,
        password: storedPassword,
        link: storedLink
      })
    }
  }, [])

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)

      if (type === 'link') {
        setTooltipText('Ссылка скопирована!')
      } else if (type === 'login') {
        setTooltipText('Логин скопирован!')
      } else if (type === 'password') {
        setTooltipText('Пароль скопирован!')
      }

      setTimeout(() => {
        setTooltipText('')
      }, 1200)
    } catch (err) {
      console.error('Ошибка копирования: ', err)
    }
  }

  return (
    <>
      {dataStorage && (
        <Popup open={true} closeOnDocumentClick={true}>
          <div className={styles.popupContainer}>
            <h3 className={styles.title}>Ваш доступ к личному кабинету</h3>
            <div className={styles.details}>
              <p onClick={() => handleCopy(dataStorage.link,'link')}>
                Cсылка:{' '}
                <a target='_blank' href={`${dataStorage.link}`}>
                  Ссылка на личный кабинет
                </a>
              </p>
              <p onClick={() => handleCopy(dataStorage.login, 'login')}>
                Логин: {dataStorage.login}
              </p>
              <p onClick={() => handleCopy(dataStorage.password, 'password')}>
                Пароль: {dataStorage.password}
              </p>
            </div>
            {tooltipText && (
              <Popup
                open={true}
                closeOnDocumentClick
                position='top center'
                onClose={() => setTooltipText('')}>
                <div className={styles.tooltip}>{tooltipText}</div>
              </Popup>
            )}
            <p className={styles.infoText}>
              Сохраните данные для входа! <br /> Напоминаем, что бесплатный
              доступ будет только 72 часа, заберите максимум пользы и
              почувствуйте себя студентом Московского Института Психологии.
            </p>
            <p className={styles.footerText}>
              Если у Вас возникли трудности с доступом, напишите обращение по
              ссылке:{' '}
              <a
                href='https://mipinstitute.getcourse.ru/pl/talks/conversation'
                target='_blank'>
                https://mipinstitute.getcourse.ru/pl/talks/conversation
              </a>
            </p>
          </div>
        </Popup>
      )}
    </>
  )
}

export default PopupAccess