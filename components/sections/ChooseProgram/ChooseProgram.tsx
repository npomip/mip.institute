import IconVerticalArrow from '@/components/icons/IconVerticalArrow'
import Wrapper from '@/components/layout/Wrapper'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Directions from '../Directions'
import ProgramList from './ProgramList'
import ProgramTitle from './ProgramTitle'

export default function ChooseProgram() {
  return (
    <div className={styles.fon}>
      <Wrapper>
      <Directions />
      </Wrapper>
    </div>
  )
}
