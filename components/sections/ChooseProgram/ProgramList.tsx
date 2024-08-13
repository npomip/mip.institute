import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram/ProgramList.module.sass'
import {
  studyFieldsCourses,
  studyFieldsProfessions
} from 'constants/studyFieldsOnMain'
import { useState } from 'react'
import Program from './Program'

type Props = {
  ofType: string
  currentType?: string
}

export default function ProgramList({ ofType, currentType }: Props) {
  const list = ofType === 'course' ? studyFieldsCourses : studyFieldsProfessions

  const [openListIndex, setOpenListIndex] = useState(-1)

  return (
    <div className={styles.program}>
      {list.map(({ label, slug }, index) => (
        <Program
          ofType={ofType}
          index={index}
          slug={slug}
          key={`${slug}-${index}`}
          label={label}
          href={`${
            ofType === 'course'
              ? routes.front.courses
              : routes.front.professions
          }/${slug}`}
          openListIndex={openListIndex} // Передаем состояние открытого списка
          setOpenListIndex={setOpenListIndex}
          showIcon={ofType !== 'course'}
        />
      ))}
    </div>
  )
}
