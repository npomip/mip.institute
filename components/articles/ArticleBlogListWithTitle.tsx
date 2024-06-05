import stls from '@/styles/components/articles/ArticleBlogListWithTitle.module.sass'
import ArticleBlogListWithTitleItem from './ArticleBlogListWithTitleItem'

type ArticleBlogListWithTitleType = {
  props: {
    icon: string
    item?: {
      id?: string
      text?: string
      title: string
      icon?: string
    }[]
  }
}

const ArticleBlogListWithTitle = ({ props }: ArticleBlogListWithTitleType) => {
  const list = props.item || []

  return (
    <div className={stls.contentBox}>
      {list &&
        list.map((el, i) => (
          <ArticleBlogListWithTitleItem key={el.id} props={el} />
        ))}
    </div>
  )
}

export default ArticleBlogListWithTitle
