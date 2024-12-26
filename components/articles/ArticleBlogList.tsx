import stls from '@/styles/components/articles/ArticleBlogList.module.sass'
import ArticleBlogListItem from './ArticleBlogListItem'
import { DocumentContent } from './ArticleContentLinks'

type ArticleBlogListType = {
  props: {
    text: DocumentContent
    icon: DocumentContent
  }
}

const ArticleBlogList = ({ props }: ArticleBlogListType) => {
  const list = props.text || []

  return (
    <div className={stls.contentBox}>
      {list && list.map((el,i) => <ArticleBlogListItem key={i} icon={props?.icon?.[0]?.children?.[0]?.text} text={el?.children[0].text} />)}
    </div>
  )
}

export default ArticleBlogList
