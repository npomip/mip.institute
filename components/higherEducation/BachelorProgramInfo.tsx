import stls from '@/styles/components/higherEducation/BachelorProgramInfo.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext, useState } from 'react'
import OneInfo from './OneInfo'

const BachelorProgramInfo = () => {
  const { bachelor } = useContext(ContextStaticProps)

  const {
    minTime,
    maxTime,
    admissionDate
  } = bachelor

  const points = [
    {
      key: 'Уровень:',
      val: 'Бакалавриат',
    },
    {
      key: 'Срок обучения:',
      val: `от ${minTime} до ${maxTime}`,
    },
    {
      key: 'Форма обучения:',
      val: 'очно-заочная (с применением ДОТ)',
    },
    {
      key: 'Диплом:',
      val: `о высшем образовании и дополнительном образовании`,
    },
    {
      key: <>Ближайшие <br /> зачисления</>,
      val: admissionDate,
    }
  ]


  return (
    <div className={stls.points}>
      {points.map(point => (
        <OneInfo point={point} />
      ))}
    </div>
  )
}

export default BachelorProgramInfo
