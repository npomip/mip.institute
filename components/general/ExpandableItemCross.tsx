import stls from '@/styles/components/general/ExpandableItemCross.module.sass'
import { useState } from 'react'
import IconCrossBlue from '../icons/IconCrossBlue'

type Props = {
  title: string
  content: string
  isOpened?: boolean
}

const ExpandableItemCross = ({ title, content, isOpened }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className={stls.container}>
      <button className={stls.title} onClick={() => setIsOpen(!isOpen)}>
        <span className={stls.icon}>
          <IconCrossBlue isRotated={isOpened ? true : isOpen} />
        </span>
        <span className={stls.pTitle}>{title}</span>
      </button>

      <div
        className={`${stls.content} ${isOpen || isOpened ? stls.visible : ''}`}>
        <div>{content}</div>
      </div>
    </li>
  )
}

export default ExpandableItemCross
