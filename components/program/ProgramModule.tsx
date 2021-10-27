import stls from '@/styles/components/program/ProgramModule.module.sass'
import { useState } from 'react'
import classNames from 'classnames'
import { IconCircleCheck, IconMinus, IconPlus } from '@/components/icons'

const ProgramModule = ({ title, topics }) => {
  // const [isOpen, setOpen] = useState(false)

  return (
    <li
      // className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      className={classNames({ [stls.container]: true })}>
      {/* <div className={stls.title} onClick={() => setOpen(!isOpen)}> */}
      <div className={stls.title}>
        {/* <div className={stls.icon}>{isOpen ? <IconMinus /> : <IconPlus />}</div> */}
        <div className={stls.icon}>
          <IconCircleCheck />
        </div>
        {/* <p className={classNames({ [stls.pTitle]: true, [stls.bold]: isOpen })}> */}
        <p className={classNames({ [stls.pTitle]: true })}>{title}</p>
      </div>
      <div className={stls.topic}>
        <p className={stls.p}>В результате обучения вы:</p>
        {/* <ul className={stls.list}>
          {topics &&
            topics.map((topic, idx) => (
              <li key={topic + idx} className={stls.item}>
                <p className={stls.p}>{topic}</p>
              </li>
            ))}
        </ul> */}
      </div>
    </li>
  )
}

export default ProgramModule
