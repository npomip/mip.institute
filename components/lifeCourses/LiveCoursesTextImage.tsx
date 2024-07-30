import base64pixel from '@/config/base64pixel'
import styles from '@/styles/components/liveCourses/LiveCoursesTextImage.module.sass'
import Image from 'next/image'
import Wrapper from '@/components/layout/Wrapper'
// import ArticleOneContentLink from './ArticleOneContentLink'

interface LiveCorsesTextImageProps {
  props: {
    repeatBlock?: {
      txt?: string
      size?: number
      color?: {
        code: string
      }
      photo?: {
        url: string
        width: number
        height: number
      }
    }[]
  }[]
}
const LiveCoursesTextImage = ({ props }: LiveCorsesTextImageProps) => {
  const block = props.map(el => el.repeatBlock)
  // console.log(block)
  return (
    <Wrapper>
      <div className={styles.container}>
        {block?.map((el, i) => (
          // <>
          // {console.log(el)}
          // </>
          <div key={i} className={styles.block}>
            {el.map((one, idx) => (
              <div key={idx} className={styles.content}>
                {one.txt && (
                  <p
                    style={{
                      fontSize: `${one.size}px`,
                      color: `${one.color?.code}`
                    }}>
                    {one.txt}
                  </p>
                )}
                {one.photo[0] && (
                  <div className={styles.imgContainer}>
                    <Image
                      className={styles.img}
                      src={one.photo[0]?.url}
                      width={one.photo[0]?.width}
                      height={one.photo[0]?.height}
                      placeholder='blur'
                      blurDataURL={base64pixel}
                      quality={100}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default LiveCoursesTextImage
