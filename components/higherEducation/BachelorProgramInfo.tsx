import stls from '@/styles/components/higherEducation/BachelorProgramInfo.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext, useState } from 'react'
import OneInfo from './OneInfo'

const BachelorProgramInfo = ( ) => {
  const { bachelor } = useContext(ContextStaticProps)

  const points = [
    {
      index: 1,
      key: 'Уровень:',
      val: 'Бакалавриат',
    },
    {
      index: 2,
      key: 'Срок обучения:',
      val: `от ${bachelor?.minTime} до ${bachelor?.maxTime} лет`,
    },
    {
      index: 3,
      key: 'Форма обучения:',
      val: 'очно-заочная (с применением ДОТ)',
    },
    {
      index: 4,
      key: 'Диплом:',
      val: `о высшем образовании и дополнительном образовании`,
    },
    {
      index: 5,
      key: <>Ближайшие <br /> зачисления</>,
      val: bachelor?.admissionDate,
    }
  ]


  return (
    <div className={stls.points}>
      {points.map(point => (
        <OneInfo key={point.index} point={point} />
      ))}
    </div>
  )
}

export default BachelorProgramInfo
