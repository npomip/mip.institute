import IconVerticalArrow from '@/components/icons/IconVerticalArrow'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import ProgramList from './ProgramList'
import ProgramTitle from './ProgramTitle'

export default function ChooseProgram() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <ProgramTitle/>
        <ProgramList />
      </div>
        <div className={styles.icon}>
          <IconVerticalArrow />
        </div>
        
      
    </div>
  )
}
