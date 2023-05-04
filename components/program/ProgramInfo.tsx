import stls from '@/styles/components/program/ProgramInfo.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import { setDateOfEnrollment } from '@/helpers/index'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendarAlt,
  IconUsers,
  IconMap,
  IconClock,
  IconFile
} from '@/components/icons'

const ProgramInfo = () => {
  const { program } = useContext(ContextStaticProps)

  const studyHours = program?.studyHours || 0
  const studyForm = program?.studyForm || ''
  const studyFormLabel = program?.studyFormLabel || ''
  const studyMounthsDuration = program?.studyMounthsDuration || 0
  const type = program?.type || ''

  // вручную проставляет дату ближайшего зачисления
  const dateOfEnrollment = setDateOfEnrollment(10, 5);

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
      // val: <ProgramAdmission />,
      val: dateOfEnrollment,
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
