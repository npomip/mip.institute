import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Program from './Program'

export default function ProgramList() {
  const programs = [
    {name: 'Общая психология', href: '/programs/obshaya-psihologiya'},
    {name: 'Консультирование', href: '/programs/konsultirovanie'},
    {name: 'Клиническая психология', href: '/programs/klinicheskaya-psihologiya'},
    {name: 'Психотерапия', href: '/programs/psihoterapiya'},
    {name: 'Детская психология', href: '/programs/detskaya-psihologiya'},
    {name: 'Диетология и нутрициология', href: '/programs/dietologiya-i-nutriciologiya'},
    {name: 'Организационная психотерапия', href: '/programs/organizacionnaya-psihologiya'},
  ]
  return (
    <div className={styles.program}>
      {programs.map((program, index) => (
        <Program key={index} program={program} />
      )) }
    </div>
  )
}
