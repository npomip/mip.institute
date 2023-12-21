import stls from '@/styles/components/articles/ArticleBlogListWithBackgroundAndTitle.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import classNames from 'classnames'
import marked from 'marked'
import parse from 'html-react-parser'

type ArticleBlogListWithBackgroundAndTitleItemType = {
  props: {
      id?: string
      text?: string
      icon?: {
        code?: string 
      }
  }
  
}

const ArticleBlogListWithBackgroundAndTitleItem = ({props} : ArticleBlogListWithBackgroundAndTitleItemType) => {
  const text = props.text;

  const renderer = new marked.Renderer();
  renderer.html = (text) => {
    return `<div classname=${stls.icon}>${text}</div>`;
  };
  renderer.paragraph = (text) => {
    return `<p>${text}</p>`
  }
  marked.setOptions({ renderer });

  const icon = marked(props.icon.code);


  return (
      <div className={stls.innerBox}>
      {parse(icon)}
      <p>{text}</p>
      </div>
  )
}

export default ArticleBlogListWithBackgroundAndTitleItem