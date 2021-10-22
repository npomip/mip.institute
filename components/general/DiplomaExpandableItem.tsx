import stls from '@/styles/components/general/DiplomaExpandableItem.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { IconMinus, IconPlus } from '@/components/icons'

const DiplomaExpandableItem = ({ title, diplomas }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div>
        <p className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}>
          {title}
        </p>
      </div>
      <div className={stls.diplomas}>
        <ul className={stls.list}>
          {diplomas &&
            diplomas.map((diploma, idx) => (
              <li key={diploma.title + idx} className={stls.item}>
                {diploma.image}
              </li>
            ))}
        </ul>
      </div>
    </li>
  )
}

export default DiplomaExpandableItem
