import stls from '@/styles/components/articles/ArticleBlogListWithTitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import ArticleBlogListWithTitleItem from './ArticleBlogListWithTitleItem'

type ArticleBlogListWithTitleType = {
  props: {
    icon : {
      code: string
    }
    item? : {
      id?: string
      text?: string
      title: string
      icon?: {
        code?: string 
      }
    }[]
  }
  
}

const ArticleBlogListWithTitle = ({props} : ArticleBlogListWithTitleType) => {
  console.log(props)
  const list = props.item || [];

  return (
      <div className={stls.contentBox}>
      {list && list.map((el, i) => (
        <ArticleBlogListWithTitleItem key={el.id} props={el}/>
      ))}
      </div>
  )
}

export default ArticleBlogListWithTitle