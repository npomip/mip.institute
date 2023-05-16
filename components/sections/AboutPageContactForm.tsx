import styles from '@/styles/components/sections/AboutPageContactForm.module.sass'
import NewForm from '@/components/forms/NewForm'

export default function AboutPageContactForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Подберите программу</h1>
      <p className={styles.text}>Ответьте на несколько вопросов, и мы подберем Вам программу обучения</p>
      <NewForm />
    </div>
  )
}
