import stls from '@/styles/components/articles/ArticleBlogList.module.sass'
import ArticleBlogListItem from './ArticleBlogListItem'

type ArticleBlogListType = {
  props: {
    listItem?: {
      id?: string
      text?: string
      icon?: string
    }[]
  }
}

const ArticleBlogList = ({ props }: ArticleBlogListType) => {
  const list = props.listItem || []

  return (
    <div className={stls.contentBox}>
      {list && list.map(el => <ArticleBlogListItem key={el.id} props={el} />)}
    </div>
  )
}

export default ArticleBlogList
