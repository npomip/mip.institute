import stls from '@/styles/components/articles/ArticleBlogTeacherComment.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'

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
    borderColor: {
      code: string
    }
  }
}

const ArticleBlogTeacherComment = ({
  props
}: ArticleBlogTeacherCommentType) => {
  // const list = props.listItem || [];
  const specialization = props && marked(props?.specialization)
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
          // style={{top: '20px'}}
          className={stls.img}
          // layout='fill'
          width={173}
          height={226}
          placeholder='blur'
          blurDataURL={base64pixel}
        />
      </div>
      <div className={stls.textContent}>
        <div className={stls.textContentSpecialization}>
        {parse(text)}
        </div>
        <div style={{borderLeft: `2px solid ${props.borderColor.code}`}} className={stls.textContentComment}>
          <p>{parse(comment)}</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleBlogTeacherComment
