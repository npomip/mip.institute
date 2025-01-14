import styles from '@/styles/components/sections/AboutPageContactForm.module.sass'
import Wrapper from '@/ui/Wrapper'
import dynamic from 'next/dynamic'

const NewForm = dynamic(() => import('@/components/forms/NewForm'), {
  ssr: false
})

export default function AboutPageContactForm() {
  return (
    <div className={styles.container}>
      <Wrapper>
        <h1 className={styles.title}>Подберите программу</h1>
        <p className={styles.text}>
          Ответьте на несколько вопросов, и мы подберем Вам программу обучения
        </p>
        <NewForm />
      </Wrapper>
    </div>
  )
}
