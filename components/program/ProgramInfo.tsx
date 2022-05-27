import stls from '@/styles/components/program/ProgramInfo.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendarAlt,
  IconUsers,
  IconMap,
  IconClock,
  IconFile
} from '@/components/icons'

const ProgramInfo = () => {
  const {
    program,
    program: {
      studyHours,
      studyForm,
      studyFormLabel,
      studyMounthsDuration,
      type
    }
  } = useContext(ProgramContext)

  // console.log(program)

  const vals = [
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />,
      icon: <IconCalendarAlt />
    },
    {
      key: 'Форма обучения:',
      val: studyForm === 'Online' ? 'Дистанционно' : studyFormLabel,
      icon: <IconUsers />
    },
    {
      key: 'Ближайшее зачисление:',
      val: <ProgramAdmission />,
      icon: <IconMap />
    },
    {
      key: 'Количество часов:',
      val: `${studyHours} ч`,
      icon: <IconClock />
    },
    {
      key: type === 'Profession' ? 'Диплом:' : 'Документ по окончанию',
      val: type === 'Profession' ? 'Диплом о переподготовке' : 'Удостоверение',
      icon: <IconFile />
    }
  ]

  return (
    <ul className={stls.container}>
      {vals.map(({ key, val, icon }, idx) => (
        <li key={key + val + idx} className={stls.item}>
          <div className={stls.icon}>{icon}</div>
          <div>
            <p className={stls.key}>{key}</p>
            <p className={stls.val}>{val}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProgramInfo
