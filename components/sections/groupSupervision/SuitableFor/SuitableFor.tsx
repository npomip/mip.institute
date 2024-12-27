import styles from './SuitableFor.module.sass'
import { CldImage } from 'next-cloudinary'
import { suitableForContent } from 'constants/GroupSupervision/suitableFor'

const SuitableFor = () => {
  return (
    <section>
      <div className={styles.header}>
        <h2 className={styles.title}>Кому подойдет</h2>
      </div>
      <ul className={styles.list}>
        {suitableForContent.map((el, index) => (
          <li key={index} className={styles.item}>
            <CldImage
              src={el.image}
              className={styles.img}
              alt='Категория'
              width={350}
              height={350}
            />
            {el.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SuitableFor
