import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogTeacherComment.module.sass'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

type ArticleBlogTeacherCommentType = {
  props: {
    comment: string
    specialization: string
    teacher: {
      name: string
      specialization: string
      portrait: {
        url: string
        width: number
        height: number
      }
    }
    borderColor: string
  }
}

const ArticleBlogTeacherComment = ({
  props
}: ArticleBlogTeacherCommentType) => {
  const customRenderers = {
    strong: ({ children }: { children: React.ReactNode }) => (
      <span className={stls.strongText}>{children}</span>
    )
  }

  return (
    <div className={stls.contentBox}>
      <div className={stls.imgContainer}>
        <Image
          src={props.teacher.portrait.url}
          alt={props.teacher.name}
          className={stls.img}
          width={173}
          height={226}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.textContent}>
        <div className={stls.textContentSpecialization}>
          <ReactMarkdown components={customRenderers}>
            {props.specialization || ''}
          </ReactMarkdown>
        </div>
        <div
          style={{ borderLeft: `2px solid ${props.borderColor}` }}
          className={stls.textContentComment}>
          <ReactMarkdown components={customRenderers}>
            {props.comment || ''}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogTeacherComment
