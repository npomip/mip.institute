import styles from '@/styles/components/sections/TeachersLineUp/TeachersLineUp.module.sass'
import photo from '@/public/assets/imgs/general/hiddenTeacher.png'
import Image from 'next/image'

interface TeacherCardProps {
  card: {
    photo: string
    name: string
    position: string
  }
}

const HiddenCards: React.FC<TeacherCardProps> = ({ card }) => {
  return (
    <div className={styles.container}>
    
      <div className={styles.teacher}>
        <Image
          alt='logo'
          className={styles.image}
          layout='responsive'
          src={photo}
        />
      </div>
      <div className={styles.text}>
        <h3>{card.name}</h3>
        <p>{card.position}</p>
      </div>
      
    </div>
  )
}

export default HiddenCards
