import routes from '@/config/routes'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Program from './Program'

export default function ProgramList({ofType=null, currentType=null}) {
  const programs = [
    {name: 'Общая психология', href: '/programs/obshaya-psihologiya'},
    {name: 'Консультирование', href: '/programs/konsultirovanie'},
    {name: 'Клиническая психология', href: '/programs/klinicheskaya-psihologiya'},
    {name: 'Психотерапия', href: '/programs/psihoterapiya'},
    {name: 'Детская психология', href: '/programs/detskaya-psihologiya'},
    {name: 'Диетология и нутрициология', href: '/programs/dietologiya-i-nutriciologiya'},
    {name: 'Организационная психотерапия', href: '/programs/organizacionnaya-psihologiya'},
  ]

  const studyFields = [
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
    {label: 'Диетология и нутрициология', slug: 'dietologiya-i-nutriciologiya'}
  ]

  const studyFieldsProfessions = [
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Клиническая психология', slug: 'klinicheskaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
    {label: 'Диетология и нутрициология', slug: 'dietologiya-i-nutriciologiya'},
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    
  ]

  const studyFieldsCourses = [
    {label: 'Консультирование',slug: 'konsultirovanie'},
    {label: 'Детская психология', slug: 'detskaya-psihologiya'},
    {label: 'Психотерапия', slug: 'psihoterapiya'},
    {label: 'Общая психология', slug: 'obshaya-psihologiya'},
    {label: 'Организационная психология', slug: 'organizacionnaya-psihologiya'},
  ]

  const list =
    ofType === 'course'
      ? studyFieldsCourses
      : ofType === 'profession'
      ? studyFieldsProfessions
      : studyFields
      

  return (
    <div className={styles.program}>
      {list.map(({label, slug}, index) => (
        <Program key={index} label={label} 
        href={`${
          currentType === 'course'
              ? routes.front.courses
              : currentType === 'profession'
              ? routes.front.professions
              : routes.front.programs
        }/${slug}`}
        />
      )) }
    </div>
  )
}
