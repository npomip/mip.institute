import routes from '@/config/routes'
import Link from 'next/link'
import styles from '@/styles/components/cards/CardTooltip.module.sass'
import ForPopup from '../imgs/general/ForPopup'

export default function CardTooltip({ profession, clickHandler }) {
  const tagText =
    profession.type === 'Course'
      ? 'Повышение квалификации'
      : 'Профессиональная переподготовка'
  return (
    <div className={styles.container}>
      {profession.type === 'Profession' ? (
        <Link
          passHref
          key={profession.id + profession.type}
          href={`${routes.front.professions}/${
            profession.studyFieldSlug || 'studyfield'
          }/${profession.slug}`}
          onClick={clickHandler}>
          <div className={styles.card}>
            <div className={styles.img}>
              <ForPopup
                src={profession?.heroPicture?.url}
                alt={profession?.title}
                height={104}
                width={152}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.tag}>{tagText}</div>
              <div className={styles.title}>{profession.title}</div>
            </div>
          </div>
        </Link>
      ) : profession.type === 'ShortTerm' ?  (
        <Link
          passHref
          key={profession.id + profession.type + 1}
          href={`${routes.front.shortTerm}/${
            profession.studyFieldSlug || 'studyfield'
          }/${profession.slug}`}
          onClick={clickHandler}>
          <div className={styles.card}>
            <div className={styles.img}>
              <ForPopup
                src={profession?.heroPicture?.url}
                alt={profession?.title}
                height={104}
                width={152}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.tag}>{tagText}</div>
              <div className={styles.title}>{profession.title}</div>
            </div>
          </div>
        </Link>
      ) : (
        <Link
          passHref
          key={profession.id + profession.type + 1}
          href={`${routes.front.courses}/${
            profession.studyFieldSlug || 'studyfield'
          }/${profession.slug}`}
          onClick={clickHandler}>
          <div className={styles.card}>
            <div className={styles.img}>
              <ForPopup
                src={profession?.heroPicture?.url}
                alt={profession?.title}
                height={104}
                width={152}
              />
            </div>
            <div className={styles.text}>
              <div className={styles.tag}>{tagText}</div>
              <div className={styles.title}>{profession.title}</div>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}
