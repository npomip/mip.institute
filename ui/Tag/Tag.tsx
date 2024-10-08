import classNames from 'classnames'
import { ReactNode } from 'react'
import styles from './Tag.module.sass'

interface Props {
  children: ReactNode
  isWhiteText?: boolean
  type: 'orange' | 'white'
}

const Tag = ({ children, isWhiteText, type }: Props) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.orange]: type === 'orange',
        [styles.white]: type === 'white',
        [styles.whiteText]: isWhiteText && type === 'orange' // Если текст должен быть белым и тип "orange"
      })}>
      {children}
    </div>
  )
}

export default Tag
