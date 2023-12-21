import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'
import ArticleBlogListWithBackgroundAndTitleItem from './ArticleBlogListWithBackgroundAndTitleItem'

type ArticleBlogListWithBackgroundAndTitleType = {
  props: {
    title
    icon : {
      code: string
    }
    backgroundColor: {
      code
    }
    lineColor : {
      code
    }
    item? : {
      id?: string
      text?: string
      icon?: {
        code?: string 
      }
    }[]
  }
  
}

const ArticleBlogListWithBackgroundAndTitle = ({props} : ArticleBlogListWithBackgroundAndTitleType) => {
  console.log(props)
  const title = marked(props.title)
  const list = props.item || [];

  return (
      <div style={{background: props.backgroundColor.code}} className={stls.blogList}>
        {parse(title)}
        <div className={classNames({ 
          [stls.innerContent]: list?.length > 6 ? false : true,
          [stls.twoColumns]: list?.length > 6 ? true : false,
          })}>
          {list && list.map((el, i) => (
          <ArticleBlogListWithBackgroundAndTitleItem key={el.id} props={el}/>
          ))}
        </div>
      
      </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitle