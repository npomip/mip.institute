import { IconArrowRight } from '@/components/icons'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Link from 'next/link'

interface ProgramProps {
    label: string;
    href: string;
}

const Program: React.FC<ProgramProps> = ({ label, href }) => {
  return (
    <Link href={href} passHref>
    <div className={styles.item}>
      <span>{label}</span>
      <IconArrowRight />
      </div>
    </Link>
    
  )
}

export default Program