import routes from '@/config/routes'
import Link from 'next/link'
import styles from '@/styles/components/cards/CardTooltip.module.sass'
import { ImgCourse2 } from '../imgs'

export default function CardTooltip({ profession, clickHandler }) {
  return (
    <div className={styles.container}>
      {profession.type === 'Profession' ? (
        
        <Link
          key={profession.id + profession.type}
          href={`${routes.front.professions}/${
            profession.studyFieldSlug || 'studyfield'
          }/${profession.slug}`}>
            
          <a onClick={clickHandler}>
          <div className={styles.card}>
            <div className={styles.img}>
              <ImgCourse2 height={80} width={110} />
            </div>
            <div className={styles.title}>
              {profession.title}
            </div>
          </div>
          </a>
        </Link>
      ) : (
        <Link
          key={profession.id + profession.type}
          href={`${routes.front.courses}/${
            profession.studyFieldSlug || 'studyfield'
          }/${profession.slug}`}>
          <a onClick={clickHandler}>
          <div className={styles.card}>
          <div className={styles.img}>
              <ImgCourse2 height={80} width={110} />
            </div>
            <div className={styles.title}>
              {profession.title}
            </div>
            </div>
            </a>
        </Link>
      )}
    </div>
  )
}
