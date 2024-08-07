import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleTitle.module.sass'
import Image from 'next/image'
import { IconClock } from '@/components/icons'

type ArticleTitleType = {
  props: {
    readTime: number
    title?: string
    studyField?: string
    date?: Date
    picture: {
      url: string
      width: string
      height: string
    }
    blogAuthor: {
      name: string
      portrait: {
        url: string
        width: string
        height: string
      }
    }
    teacher?: {
      name: string
      achievements: string
      achievementsJournal: string
      portraitForBlog?: {
        url: string
        width: string
        height: string
      }
      portrait?: {
        url: string
        width: string
        height: string
      }
    }
  }
}

const ArticleTitle = ({ props }: ArticleTitleType) => {
  const date = new Date(props?.date)

  return (
    <>
      <span className={stls.tag}>{props.studyField}</span>
      <div className={stls.authors}>
        <p className={stls.author}>
          <span className={stls.strongText}>Автор:</span>{' '}
          {props.blogAuthor && props.blogAuthor.name}
        </p>
        <div className={stls.dateAndTime}>
          <p className={stls.date}>{date.toLocaleDateString()}</p>
          <IconClock colorCode='#545454' size='22' />
          <p className={stls.time}>{props.readTime} мин</p>
        </div>
      </div>

      <h1 className={stls.articleTitle}>{props.title}</h1>
      <div className={stls.imgBox}>
        <div
          className={stls.imgTitleContainer}
          style={{ flex: !props?.teacher && 1 }}>
          <Image
            src={props?.picture?.url}
            alt={'Баннер'}
            className={stls.imgTitle}
            width={props?.teacher ? 750 : 1180}
            height={props?.teacher ? 430 : 530}
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>
        {props?.teacher && (
          <div className={stls.imgTeacherWithAchievements}>
            <div className={stls.imgTeacherContainer}>
              <Image
                src={
                  props.teacher?.portraitForBlog?.url ||
                  props.teacher?.portrait?.url
                }
                alt={'Фото преподавателя'}
                className={stls.imgTeacher}
                width={227}
                height={292}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.teacherText}>
              <p className={stls.teacherName}>{props?.teacher?.name}</p>
              <p className={stls.achievements}>
                {props?.teacher?.achievementsJournal}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ArticleTitle
