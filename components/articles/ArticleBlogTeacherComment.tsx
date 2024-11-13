import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogTeacherComment.module.sass'
import Image from 'next/image'

type ArticleBlogTeacherCommentType = {
  props: {
    comment: string
    specialization: string
    portrait: {
      url: string
      width: number
      height: number
    }
    borderColor: string
  }
}

const ArticleBlogTeacherComment = ({
  props
}: ArticleBlogTeacherCommentType) => {
  return (
    <div className={stls.contentBox}>
      <div className={stls.imgContainer}>
        <Image
          src={props.portrait.url}
          alt={'преподаватель'}
          className={stls.img}
          width={173}
          height={226}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.textContent}>
        <div className={stls.textContentSpecialization}>
          <p>{props.specialization || ''}</p>
        </div>
        <div
          style={{ borderLeft: `2px solid ${props.borderColor}` }}
          className={stls.textContentComment}>
          <p>{props.comment || ''}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogTeacherComment
