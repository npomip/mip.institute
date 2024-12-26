import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import styles from './PopupAccess.module.sass'

const PopupAccess = () => {
  const [dataStorage, setDataStorage] = useState(null)
  const [tooltipType, setTooltipType] = useState(null)

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

      setTooltipType(type)
      setTimeout(() => {
        setTooltipType(null)
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
              {tooltipType === 'link' && <div className={styles.tooltip}>Cсылка скопирован</div>}
              <p onClick={() => handleCopy(dataStorage.link, 'link')}>
                Cсылка:{' '}
                <a target='_blank' href={`${dataStorage.link}`}>
                  Ссылка на личный кабинет
                </a>
              </p>
            </div>
            <div className={styles.details}>
              {tooltipType === 'login' && <div className={styles.tooltip}>Логин скопирован</div>}
              <p onClick={() => handleCopy(dataStorage.login, 'login')}>
                Логин: {dataStorage.login}
              </p>
            </div>
            <div className={styles.details}>
              {tooltipType === 'password' && (
                <div className={styles.tooltip}>Пароль скопирован</div>
              )}
              <p onClick={() => handleCopy(dataStorage.password, 'password')}>
                Пароль: {dataStorage.password}
              </p>
            </div>
            <p className={styles.infoText}>
              Сохраните данные для входа! <br /> Напоминаем, что бесплатный доступ будет только 72
              часа, заберите максимум пользы и почувствуйте себя студентом Московского Института
              Психологии.
            </p>
            <p className={styles.footerText}>
              Если у Вас возникли трудности с доступом, напишите обращение по ссылке:{' '}
              <a href='https://mipinstitute.getcourse.ru/pl/talks/conversation' target='_blank'>
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
