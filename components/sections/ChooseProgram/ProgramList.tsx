import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram/ProgramList.module.sass'
import { useState } from 'react'
import Program from './Program'
import Link from 'next/link'

const studyFieldsProfessions = [
  { label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya' },
  {
    label: 'Диетология и нутрициология',
    slug: 'dietologiya-i-nutriciologiya'
  },
  { label: 'Консультирование', slug: 'konsultirovanie' },
  { label: 'Психотерапия', slug: 'psihoterapiya' },
  {
    label: 'Организационная психология',
    slug: 'organizacionnaya-psihologiya'
  },
  { label: 'Общая психология', slug: 'obshaya-psihologiya' },
  { label: 'Детская психология', slug: 'detskaya-psihologiya' }
]

const studyFieldsCourses = [
  { label: 'Детская психология', slug: 'detskaya-psihologiya' },
  { label: 'Общая психология', slug: 'obshaya-psihologiya' },
  {
    label: 'Организационная психология',
    slug: 'organizacionnaya-psihologiya'
  },
  { label: 'Консультирование', slug: 'konsultirovanie' },
  { label: 'Психотерапия', slug: 'psihoterapiya' }
]

type Props = {
  ofType: string
  currentType?: string
}

export default function ProgramList({ ofType, currentType }: Props) {
  const list = ofType === 'course' ? studyFieldsCourses : studyFieldsProfessions

  const [openListIndex, setOpenListIndex] = useState(-1)

  return (
    <div className={styles.program}>
      {ofType === 'course' && (
        <Link href={routes.front.courses}>
          <a className={styles.all} style={{ margin: 0 }}>
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
