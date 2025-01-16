import styles from '@/components/sections/groupSupervision/SuitableFor/SuitableFor.module.sass'

const suitableForContent = [
  {
    title: (
      <span className={styles.contentText}>
        Начинающие <br /> психологи
      </span>
    ),
    image: 'supervision_suitable_For1_c6b404f403'
  },
  {
    title: (
      <span className={styles.contentText}>
        Практикующие <br /> психологи
      </span>
    ),
    image: 'supervision_suitable_For2_735aa31f76'
  },
  {
    title: (
      <span className={styles.contentText}>
        Студенты программ
        <br /> профессиональной переподготовки
        <br /> и старших курсов психологических <br />
        факультетов ВУЗов
      </span>
    ),
    image: 'supervision_suitable_For3_ec7136d18d'
  }
]

export { suitableForContent }
