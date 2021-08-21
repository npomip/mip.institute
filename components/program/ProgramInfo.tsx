import stls from '@/styles/components/program/ProgramInfo.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import { getCasedRuYearString, getCasedRuMonthString } from '@/helpers/index'

const ProgramInfo = () => {
  const {
    program: { studyHours, studyFormLabel, studyMounthsDuration }
  } = useContext(ProgramContext)

  const vals = [
    { key: 'Зачисление', val: 'каждый месяц' },
    { key: 'Количество часов', val: `${studyHours} ч` },
    { key: 'Форма обучения', val: `${studyFormLabel}` },
    {
      key: 'Срок обучения',
      val: `${getCasedRuYearString(
        studyMounthsDuration
      )} ${getCasedRuMonthString(studyMounthsDuration)}`
    }
  ]

  return (
    <div className={stls.container}>
      {vals.map(({ key, val }, idx) => (
        <div key={key + val + idx} className={stls.group}>
          <p className={stls.key}>{key}</p>
          <p className={stls.val}>{val}</p>
        </div>
      ))}
    </div>
  )
}

export default ProgramInfo
