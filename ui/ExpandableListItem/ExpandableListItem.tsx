import { useState } from 'react'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'
import classNames from 'classnames'
import stls from './ExpandableListItem.module.sass'
import { TypeDataDocs } from '@/types/index'
import loadIcon from '@/helpers/general/loadIcon'

type Props = {
  title: string
  contentLeft: TypeDataDocs
  contentRight?: TypeDataDocs
}

const ExpandableListItem = ({ title, contentLeft, contentRight }: Props) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <button className={stls.title} onClick={() => setOpen(!isOpen)}>
        <span className={stls.icon}>
          {isOpen ? <IconMinus /> : <IconPlus />}
        </span>
        <span
          className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}>
          {title}
        </span>
      </button>
      <div className={stls.content}>
        <ul className={stls.listLeft}>
          {contentLeft?.map((item, idx) => (
            <li key={item.val + idx} className={stls.itemLeft}>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={stls.link}>
                <div className={stls.icon}>{loadIcon('IconDoc')}</div>
                <span className={stls.text}>{item.val}</span>
              </a>
            </li>
          ))}
        </ul>
        <ul className={stls.listRight}>
          {contentRight?.map((item, idx) => (
            <li key={item.val + idx} className={stls.itemRight}>
              <a
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={stls.link}>
                <div className={stls.icon}>{loadIcon('IconDoc')}</div>
                <span className={stls.text}>{item.val}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ExpandableListItem
