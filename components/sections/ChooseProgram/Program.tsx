import { IconArrowRight } from '@/components/icons'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Link from 'next/link'

interface ProgramProps {
  program: {
    name: string;
    href: string;
  }
}

const Program: React.FC<ProgramProps> = ({ program }) => {
  return (
    <Link href={program.href}>
    <div className={styles.item}>
      <span>{program.name}</span>
      <IconArrowRight />
      </div>
    </Link>
    
  )
}

export default Program