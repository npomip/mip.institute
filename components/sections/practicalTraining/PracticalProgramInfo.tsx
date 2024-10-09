import stls from '@/styles/components/sections/higherEducation/BachelorProgramInfo.module.sass'
import OneInfo from '../higherEducation/OneInfo'
import { PracticalTraining } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'

export type Point =
  | {
      index: number
      key: string
      val: string
    }
  | {
      index: number
      key: string
      val: JSX.Element
    }
  | {
      index: number
      key: JSX.Element
      val: any
    }

type Props = {
  practicalTraining: PracticalTraining
}

const PracticalProgramInfo = ({ practicalTraining }: Props) => {
  const points: Point[] = [
    {
      index: 1,
      key: 'Уровень:',
      val: <>программа практической подготовки</>
    },
    {
      index: 2,
      key: 'Срок обучения:',
      val: `${practicalTraining?.duration}`
    },
    {
      index: 3,
      key: 'Форма обучения:',
      val: (
        <>
          заочная <br /> (онлайн)
        </>
      )
    },
    {
      index: 4,
      key: 'Документ:',
      val: `сертификат`
    },
    {
      index: 5,
      key: (
        <>
          Ближайшее <br /> зачисление:
        </>
      ),
      val: 'ежемесячное'
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

export default PracticalProgramInfo
