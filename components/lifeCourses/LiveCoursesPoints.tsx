import base64pixel from '@/config/base64pixel'
import styles from '@/styles/components/liveCourses/LiveCorsesPoints.module.sass'
import Image from 'next/image'
import Wrapper from '@/components/layout/Wrapper'
import FullWrapper from '../layout/FullWrapper'
// import ArticleOneContentLink from './ArticleOneContentLink'

interface LiveCorsesPointsProps {
  props: {
    title: string
    subtitle: string
    color: {
      code: string
    }
    medalion: {
      text: string
    }[]
  }
}
const LiveCorsesPoints = ({ props }: LiveCorsesPointsProps) => {
  const { title, subtitle, color, medalion } = props
  // console.log(title, subtitle, color, medalion)
  return (
    <div
      style={{ backgroundColor: `${color.code}` }}
      className={styles.container}>
      <FullWrapper>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.medalionContainer}>
            {medalion.map((el, idx) => (
              <div key={idx}>
                {idx === 5 ? (
                  <div className={styles.medalionAbs}>
                    <div style={{'background': `${color.code}`}} className={styles.circle}></div>
                    <p>{el.text}</p>
                  </div>
                ) : (
                  <div className={styles.medalion}>
                    <div style={{'background': `${color.code}`}} className={styles.circle}></div>
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

export default LiveCorsesPoints
