import styles from '@/styles/components/sections/liveCourses/LiveCoursesPoints.module.sass'
import FullWrapper from '@/components/layout/FullWrapper'

interface LiveCorsesPointsProps {
  props: {
    title: string
    subtitle: string
    color: string
    medalion: {
      text: string
    }[]
  }
}
const LiveCoursesPoints = ({ props }: LiveCorsesPointsProps) => {
  const { title, subtitle, color, medalion } = props

  return (
    <div style={{ backgroundColor: `${color}` }} className={styles.container}>
      <FullWrapper>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.medalionContainer}>
            {medalion.map((el, idx) => (
              <div key={idx}>
                {idx === 5 ? (
                  <div className={styles.medalionAbs}>
                    <div
                      style={{ background: `${color}` }}
                      className={styles.circle}></div>
                    <p>{el.text}</p>
                  </div>
                ) : (
                  <div className={styles.medalion}>
                    <div
                      style={{ background: `${color}` }}
                      className={styles.circle}></div>
                    <p>{el.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </FullWrapper>
    </div>
  )
}

export default LiveCoursesPoints
