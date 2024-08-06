import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/higherEducation/BachelorProgramInfo.module.sass'
import { useContext } from 'react'
import OneInfo from './OneInfo'

const BachelorProgramInfo = () => {
  const { bachelor } = useContext(ContextStaticProps)

  const points = [
    {
      index: 1,
      key: 'Уровень:',
      val: 'Бакалавриат'
    },
    {
      index: 2,
      key: 'Срок обучения:',
      val: `от ${bachelor?.minTime} до ${bachelor?.maxTime} лет`
    },
    {
      index: 3,
      key: 'Форма обучения:',
      val: (
        <>
          очно-заочная <br />
          (с применением ДОТ)
        </>
      )
    },
    {
      index: 4,
      key: 'Диплом:',
      val: `о высшем образовании и дополнительном образовании`
    },
    {
      index: 5,
      key: (
        <>
          Ближайшее <br /> зачисление:
        </>
      ),
      val: bachelor?.admissionDate
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
