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
        <div className={stls.author}>
          <div className={stls.imgAuthorContainer}>
            <Image
              src={props.blogAuthor?.portrait?.url}
              alt={'Фото преподавателя'}
              className={stls.imgAuthor}
              width={30}
              height={30}
              blurDataURL={base64pixel}
            />
          </div>
          <span className={stls.strongText}>Автор:</span>
          {props.blogAuthor && props.blogAuthor.name}
        </div>
        {props.teacher && (
          <div className={stls.author}>
            <span className={stls.strongText}>Психолог:</span>
            {props?.teacher?.name}
          </div>
        )}
        <div className={stls.dateAndTime}>
          <div className={stls.date}>
            {date.toLocaleDateString().replaceAll('/', '.')}
          </div>
          <div className={stls.time}>
            <IconClock colorCode='#545454' size='18' />
            <span className={stls.readTime}>{props.readTime} минут</span>
          </div>
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
              <span className={stls.expert}>
                Статья написана совместно с экспертом:
              </span>
              <Image
                src={
                  props.teacher?.portraitForBlog?.url ||
                  props.teacher?.portrait?.url
                }
                alt={'Фото преподавателя'}
                className={stls.imgTeacher}
                width={100}
                height={200}
                placeholder='blur'
                blurDataURL={base64pixel}
              />
            </div>
            <div className={stls.teacherText}>
              <p className={stls.teacherName}>{props?.teacher?.name}</p>
              <p className={stls.achievements}>
                {props?.teacher?.achievements}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ArticleTitle
