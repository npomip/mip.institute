import styles from './SuitableFor.module.sass'
import img1 from '@/public/assets/imgs/groupSupervision/SuitableFor/image1.png'
import img2 from '@/public/assets/imgs/groupSupervision/SuitableFor/image2.png'
import img3 from '@/public/assets/imgs/groupSupervision/SuitableFor/image3.png'
import Image from 'next/image'

const content = [
  {
    title: (
      <span className={styles.contentText}>
        Начинающие <br /> психологи
      </span>
    ),
    image: img1
  },
  {
    title: (
      <span className={styles.contentText}>
        Практикующие <br /> психологи
      </span>
    ),
    image: img2
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
    image: img3
  }
]

const SuitableFor = () => {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Кому подойдет</h2>
        {/* <p className={styles.text}>
          <span className={styles.bold}>Практикующие специалисты,&nbsp;</span>
          желающие повысить свой профессиональный уровень и личную эффективность
        </p> */}
      </div>
      <ul className={styles.list}>
        {content.map((el, index) => (
          <li key={index} className={styles.item}>
            <Image
              src={el.image}
              className={styles.img}
              alt='Категория'
              style={{ width: '100%', height: 'auto' }}
            />
            {el.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SuitableFor
