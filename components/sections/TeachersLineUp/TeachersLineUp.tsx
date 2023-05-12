import { BtnAlpha } from '@/components/btns'
import styles from '@/styles/components/sections/TeachersLineUp/TeachersLineUp.module.sass'
import React from 'react'
import HiddenCards from './HiddenCards'
import TeacherCard from './TeacherCard'

const TeachersLineUp = () => {
  const profile = [
    {
      photo: '',
      name: 'Александр Иванов',
      position:
        'Исполнительный директор Центра психологии школы управления Сколково'
    },
    {
      photo: '',
      name: 'Валентина Шаврыгина',
      position:
        'Исполнительный директор Центра психологии школы управления Сколково'
    },
    {
      photo: '',
      name: 'Александр Иванов',
      position:
        'Исполнительный директор Центра психологии школы управления Сколково'
    },
    {
      photo: '',
      name: 'Валентина Шаврыгина',
      position:
        'Исполнительный директор Центра психологии школы управления Сколково'
    }
  ]
  return (
    <>
      <div className={styles.cards}>
        {profile.map((card, index) => (
          <TeacherCard key={index} card={card} />
        ))}
      </div>
      <div className={styles.hideCards}>
        {profile.map((card, index) => (
          <HiddenCards key={index} card={card} />
        ))}
      </div>
      <div className={styles.btnContainer}>
      <BtnAlpha text='Запросить полный список'/>
      </div>
      
    </>
  )
}

export default TeachersLineUp
