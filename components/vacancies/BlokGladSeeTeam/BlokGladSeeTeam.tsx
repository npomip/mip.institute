import Wrapper from '@/ui/Wrapper'
import styles from './BlokGladSeeTeam.module.sass'
import { parseRichTextData, RichTextParagraph } from './const'


type PropsType = {
  props: {
    __component: string
    id: number
    text: RichTextParagraph[]
    img?: string | null
  }
}

const BlokGladSeeTeam = ({ props }: PropsType) => {
  const parsedData = parseRichTextData(props)
  if (!parsedData) return null
  const videoSrc = 'https://kinescope.io/jfpp3hCFWwD48XV8BW9nGB'
  return (
    <section className={styles.container}>
      <Wrapper>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>{parsedData.title}</h2>
            <p className={styles.description}>{parsedData.description}</p>

            <div className={styles.mobVideoBlock}>
              <div className={styles.playerWrapper}>
                <iframe
                  src={videoSrc}
                  allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
                  className={styles.iframe}></iframe>
              </div>
            </div>
            {parsedData.link && (
              <a
                href={parsedData.link}
                className={styles.button}
                target='_blank'
                rel='noopener noreferrer'>
                {parsedData.linkText}
              </a>
            )}
          </div>

          <div className={styles.videoBlock}>
            <div className={styles.playerWrapper}>
              <iframe
                src={videoSrc}
                allow='autoplay; fullscreen; picture-in-picture; encrypted-media;'
                className={styles.iframe}></iframe>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default BlokGladSeeTeam
