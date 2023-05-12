import React from 'react'
import styles from '@/styles/components/icons/IconCheck.module.sass'

export default function IconCheck() {
  return (
    <span className={styles.container}>
      <svg
        className={styles.svg}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect width='20' height='20' rx='10' fill='#F87E1B' />
        <path
          d='M13.3158 8L9.10526 12.2106L7 10.1053'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </span>
  )
}
