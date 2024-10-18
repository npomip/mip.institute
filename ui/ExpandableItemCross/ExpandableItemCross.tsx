import stls from './ExpandableItemCross.module.sass'
import { useEffect, useState } from 'react'
import IconCrossBlue from '@/components/icons/IconCrossBlue'

type Props = {
  title: string
  content: string
  isOpened?: boolean
}

const ExpandableItemCross = ({ title, content, isOpened }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpened && setIsOpen(true)
  }, [isOpened])

  return (
    <li className={stls.container}>
      <button className={stls.title} onClick={() => setIsOpen(!isOpen)}>
        <span className={stls.icon}>
          <IconCrossBlue isRotated={isOpen} />
        </span>
        <span className={stls.pTitle}>{title}</span>
      </button>

      <div className={`${stls.content} ${isOpen ? stls.visible : ''}`}>
        <div>{content}</div>
      </div>
    </li>
  )
}

export default ExpandableItemCross
