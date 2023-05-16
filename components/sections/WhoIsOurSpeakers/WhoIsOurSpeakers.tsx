import IconOrnament from '@/components/icons/IconOrnament'
import styles from '@/styles/components/sections/WhoIsOurSpeakers/WhoIsOurSpeakers.module.sass'
import HowWeChooseSpeakers from './HowWeChooseSpeakers'

export default function WhoIsOurSpeakers() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <HowWeChooseSpeakers />
      </div>
      <div className={styles.ornament}>
        <IconOrnament />
      </div>
      
    </div>
  )
}
