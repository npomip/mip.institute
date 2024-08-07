import base64pixel from '@/config/base64pixel'
import stls from '@/styles/components/articles/ArticleBlogTeacherComment.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import Image from 'next/image'

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
  const comment = props?.comment

  const renderer = new marked.Renderer()

  renderer.strong = text => {
    return `<span className=${stls.strongText}>${text}</span>`
  }
  marked.setOptions({ renderer })

  const text = marked(props.specialization)

  return (
    <div className={stls.contentBox}>
      <div className={stls.imgContainer}>
        <Image
          src={props.teacher.portrait.url}
          alt={'alt'}
          className={stls.img}
          width={173}
          height={226}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.textContent}>
        <div className={stls.textContentSpecialization}>{parse(text)}</div>
        <div
          style={{ borderLeft: `2px solid ${props.borderColor}` }}
          className={stls.textContentComment}>
          <p>{parse(comment)}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogTeacherComment
