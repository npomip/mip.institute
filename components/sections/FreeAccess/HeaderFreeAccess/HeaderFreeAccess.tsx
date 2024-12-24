import React from 'react'
import styles from './HeaderFreeAccess.module.sass'
import classNames from 'classnames'
import Image from 'next/image'

const HeaderFreeAcces = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={
              'https://res.cloudinary.com/mipinstitute/image/upload/v1734966269/Banner_Besplatnogo_Dostupa_22431f0eb7.png'
            }
            alt={'Новогодний баннер'}
            width={'1159'}
            height={'559'}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={styles.bannerContent}>
          <span className={styles.title}>
            ПОЛУЧИТЕ <span className={styles.violetTitle}>БЕСПЛАТНЫЙ </span>
          </span>
          <br />
          <span className={classNames(styles.title, styles.violetTitle)}>
            ПЕРСОНАЛЬНЫЙ ДОСТУП
            <br />
          </span>
          <span className={styles.title}>
            ко всем вебинарам Московского Института Психологии по разным
            направлениям
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeaderFreeAcces
