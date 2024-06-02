import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import styles from '@/styles/pages/JournalSlug.module.sass'
import parse from 'html-react-parser'
import marked from 'marked'

type ArticleBlogListWithBackgroundAndTitleItemType = {
  props: {
    id?: string
    text?: string
    icon?: string
  }
}

const ArticleBlogListWithBackgroundAndTitleItem = ({
  props
}: ArticleBlogListWithBackgroundAndTitleItemType) => {
  const { text, icon } = props

  const renderer = new marked.Renderer()
  renderer.code = html => {
    return `<div class="${stls.icon}">${html}</div>`
  }
  renderer.paragraph = text => {
    return `<p>${text}</p>`
  }
  renderer.strong = title => {
    return `<span class="${styles.strongText}">${title}</span>`
  }
  
  marked.setOptions({ renderer })

  const parsedIcon = parse(marked(icon))

  return (
    <div className={stls.innerBox}>
      {parsedIcon}
      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitleItem
