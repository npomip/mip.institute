import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram/ProgramList.module.sass'
import { useState } from 'react'
import Program from './Program'
import Link from 'next/link'
import { studyFieldsBachelors, studyFieldsCourses, studyFieldsProfessions } from 'constants/indexPage/navigationItems'

type Props = {
  ofType: string
  currentType?: string
}

export default function ProgramList({ ofType, currentType }: Props) {
  const typeMap = {
    course: studyFieldsCourses,
    profession: studyFieldsProfessions,
    bachelor: studyFieldsBachelors
  };
  const list = typeMap[ofType] || [];
  
  const [openListIndex, setOpenListIndex] = useState(-1)

  return (
    <div className={styles.program}>
      {ofType === 'course' && (
        <Link href={routes.front.courses}>
          <a className={styles.all}>
            Все направления
          </a>
        </Link>
      )}
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
              : ofType === 'profession'
              ? routes.front.professions
              : ofType === 'bachelor' 
              ? routes.front.bachelors
              : null
          }/${slug}`}
          openListIndex={openListIndex} // Передаем состояние открытого списка
          setOpenListIndex={setOpenListIndex}
          showIcon
        />
      ))}
    </div>
  )
}
