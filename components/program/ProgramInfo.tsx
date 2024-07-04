import stls from '@/styles/components/program/ProgramInfo.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext, useState } from 'react'
import ProgramAdmission from '@/components/program/ProgramAdmission'
import ProgramStudyDuration from '@/components/program/ProgramStudyDuration'
import {
  IconCalendarAlt,
  IconUsers,
  IconMap,
  IconClock,
  IconFile
} from '@/components/icons'
import IconInfo from '../icons/IconInfo'

const ProgramInfo = () => {
  const { program } = useContext(ContextStaticProps)

  const studyHours = program?.studyHours || 0
  const studyForm = program?.studyForm || ''
  const studyFormLabel = program?.studyFormLabel || ''
  const studyMounthsDuration = program?.studyMounthsDuration || 0
  const type = program?.type || ''

  const vals = [
    {
      key: 'Срок обучения:',
      val: <ProgramStudyDuration studyMounthsDuration={studyMounthsDuration} />,
      icon: <IconCalendarAlt />
    },
    {
      key: 'Форма обучения:',
      val: studyForm === 'Online' ? 'дистанционно' : studyFormLabel,
      icon: <IconUsers />
    },
    {
      key: 'Ближайшее зачисление:',
      // val: 'до 3 июля',
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
      icon: <IconFile />,
      iconInfo: <IconInfo />
    }
  ]
  const [info, setInfo] = useState(false)

  const infoHandler = () => {
    setInfo(prev => !prev)
  }

  return (
    <>
      <ul className={stls.container}>
        {vals.map(({ key, val, icon, iconInfo }, idx) => (
          <li key={key + val + idx} className={stls.item}>
            <div className={stls.icon}>{icon}</div>
            {iconInfo && (
              <div
                onMouseEnter={infoHandler}
                onMouseLeave={infoHandler}
                className={stls.anotherIcon}>
                {iconInfo}
              </div>
            )}

            <div>
              <p className={stls.key}>{key}</p>
              <p className={stls.val}>{val}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {info && (
          <p className={stls.licenseInfo}>
            Диплом о переподготовке —это официальный документ, который даёт
            право вести профессиональную деятельность по полученной
            специальности. Все выданные дипломы вносятся в{' '}
            <span>
              ФРДО — Федеральный реестр сведений о документах об образовании.
            </span>
          </p>
        )}
      </div>
    </>
  )
}

export default ProgramInfo
