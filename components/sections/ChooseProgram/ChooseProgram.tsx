import Wrapper from '@/ui/Wrapper'
import styles from '@/styles/components/sections/ChooseProgram.module.sass'
import Directions from '../Directions'

export default function ChooseProgram() {
  return (
    <div className={styles.fon}>
      <Wrapper>
        <Directions />
      </Wrapper>
    </div>
  )
}
