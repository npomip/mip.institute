import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { IconMinus, IconPlus } from '@/components/icons'

const ProgramModule = ({ title, topics }) => {
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
      <div className={stls.topic}>
        <p className={stls.p}>В результате обучения вы:</p>
        <ul className={stls.list}>
          {topics.map((topic, idx) => (
            <li key={topic + idx} className={stls.item}>
              <p className={stls.p}>{topic}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProgramModule
