import styles from './Accordion.module.sass'
import React, { FC, useEffect, useState } from 'react'
import { IconArrowRight } from '@/components/icons'

interface Props {
  title?: string
  children?: React.ReactNode
}

const Accordion: FC<Props> = ({ title = 'Содержание', children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => setIsOpen(isOpen), [isOpen])

  return (
    <div className={styles.accordion}>
      <header onClick={handleOpen} className={styles.header}>
        {title}
        <div className={`${styles.icon} ${isOpen ? styles.isOpen : ''}`}>
          <IconArrowRight />
        </div>
      </header>
      {
        <div className={`${styles.content} ${isOpen ? styles.show : ''}`}>
          <div>{children}</div>
        </div>
      }
    </div>
  )
}

export default Accordion
