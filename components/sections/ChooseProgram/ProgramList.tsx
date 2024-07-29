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

const studyFieldsBachelors = [
  { label: '37.03.01 Психология', 
    slug: 'psikhologiya' 
  },
  { label: '44.03.01 Педагогическое образование', 
    slug: 'pedagogicheskoe-obrazovanie' 
  },
  {
    label: '44.03.02 Психолого-педагогическое образование',
    slug: 'psihologo-pedagogicheskoye-obrazovanie'
  }
]

type Props = {
  bachelors?: []
  ofType: string
  currentType?: string
}

export default function ProgramList({ bachelors, ofType, currentType }: Props) {
  const typeMap = {
    course: studyFieldsCourses,
    profession: studyFieldsProfessions,
    bachelor: studyFieldsBachelors
  };
  const bachelorsArray = bachelors || [];
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
          bachelors={bachelorsArray}
        />
      ))}
    </div>
  )
}
