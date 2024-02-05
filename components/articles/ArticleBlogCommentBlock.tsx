import stls from '@/styles/components/articles/ArticleBlogCommentBlock.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'
import styles from '@/styles/pages/JournalSlug.module.sass'
type ArticleBlogCommentBlockType = {
  props: {
    text?: string
    lineColor: {
      code: string
      name: string
    }
  }
}

const ArticleBlogCommentBlock = ({ props }: ArticleBlogCommentBlockType) => {
  const text = marked(props?.text)
  const renderer = new marked.Renderer()

  renderer.strong = text => {
    return `<span className=${styles.strongText}>${text}</span>`
  }

  return (
    <div
      style={{ borderLeft: `2px solid ${props?.lineColor?.code}` }}
      className={stls.commentBlock}>
      {parse(text)}
    </div>
  )
}

export default ArticleBlogCommentBlock
