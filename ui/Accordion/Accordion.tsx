import styles from './Accordion.module.sass'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { IconArrowRight } from '@/components/icons'

interface Props {
  children?: ReactNode
  title?: string | ReactNode
  icon?: ReactNode
  isIconWithBg?: boolean
  isOpened?: boolean
}

const Accordion: FC<Props> = ({
  title = 'Содержание',
  children,
  icon = <IconArrowRight />,
  isIconWithBg = false,
  isOpened = false
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  useEffect(() => {
    isOpened && setIsOpen(true)
  }, [isOpened])

  return (
    <div className={styles.accordion}>
      <header onClick={handleOpen} className={styles.header}>
        {title}
        <div
          className={`${styles.icon} ${isIconWithBg ? styles.iconWithBg : ''} ${
            isOpen ? styles.isOpen : ''
          }`}>
          {icon}
        </div>
      </header>

      <div className={`${styles.content} ${isOpen ? styles.show : ''}`}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Accordion
