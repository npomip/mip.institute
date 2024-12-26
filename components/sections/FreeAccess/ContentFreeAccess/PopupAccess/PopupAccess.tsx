import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import styles from './PopupAccess.module.sass'

type DataStorage = {
  link: string
  login: string
  password: string
}

interface PopupAccessProps {
  showPopup: boolean
  dataStorage: DataStorage | null
  onClose: () => void
}

type TooltipType = 'link' | 'login' | 'password' | null

const PopupAccess: React.FC<PopupAccessProps> = ({ showPopup, dataStorage, onClose }) => {
  const [tooltipType, setTooltipType] = useState<TooltipType>(null)

  const handleCopy = async (text: string, type: TooltipType) => {
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
        <Popup open={showPopup} closeOnDocumentClick={true} onClose={onClose}>
          <div className={styles.popupContainer}>
            <h3 className={styles.title}>Ваш доступ к личному кабинету</h3>
            <div className={styles.details}>
              {tooltipType === 'link' && <div className={styles.tooltip}>Ссылка скопирована</div>}
              <p onClick={() => handleCopy(dataStorage.link, 'link')}>
                Ссылка:{' '}
                <a target='_blank' href={dataStorage.link} rel='noreferrer'>
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
              <a
                href='https://mipinstitute.getcourse.ru/pl/talks/conversation'
                target='_blank'
                rel='noreferrer'>
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
