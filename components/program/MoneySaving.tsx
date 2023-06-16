import styles from '@/styles/components/program/MoneySaving.module.sass'

export default function MoneySaving() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.one}>
          <h1>Возврат денег</h1>
          <p>Если вы передумаете учиться, то мы вернем полную сумму в течение первых двух недель</p>
        </div>
        <div className={styles.one}>
          <h1>Сэкономьте 13%</h1>
          <p>Получите налоговый вычет. 
            Все подробности у менеджера при записи на курс</p>
        </div>
        <div className={styles.one}>
          <h1>Остались вопросы?</h1>
          <p>Позвоните нам:
            <br />
            <a className={styles.phoneNumber} href='tel:+7(499) 110-86-32'>+7(499) 110-86-32</a>
            <br />
              Или напишите на
              {/* <br/> */}
              {' '}
              <a className={styles.phoneNumber}
              target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send/?phone=%2B74991108632&amp;text&amp;type=phone_number&amp;app_absent=0'>WhatsApp </a>
            </p>
        </div>
      </div>
    </div>
  )
}
