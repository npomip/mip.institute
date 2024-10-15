import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import ArticleBlogListWithBackgroundAndTitleItem from './ArticleBlogListWithBackgroundAndTitleItem'

type ArticleBlogListWithBackgroundAndTitleType = {
  props: {
    title: string
    icon: string
    backgroundColor: string
    lineColor: string
    item?: {
      id?: string
      text?: string
      icon?: string
    }[]
  }
}

const ArticleBlogListWithBackgroundAndTitle = ({
  props
}: ArticleBlogListWithBackgroundAndTitleType) => {
  const list = props.item || []

  return (
    <div
      style={{ background: props.backgroundColor }}
      className={stls.blogList}>
      <ReactMarkdown>{props.title || ''}</ReactMarkdown>
      <div
        className={classNames({
          [stls.innerContent]: list.length <= 6,
          [stls.twoColumns]: list.length > 6
        })}>
        {list &&
          list.map(el => (
            <ArticleBlogListWithBackgroundAndTitleItem key={el.id} props={el} />
          ))}
      </div>
    </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitle
